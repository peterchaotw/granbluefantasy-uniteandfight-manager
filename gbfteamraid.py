import requests
import json

class gbfteamraid():
    
    url_login = 'http://info.gbfteamraid.fun/login'
    url_teamraid = 'http://info.gbfteamraid.fun/web/teamraid'
    url_guildrank = 'http://info.gbfteamraid.fun/web/guildrank'
    url_userrank = 'http://info.gbfteamraid.fun/web/userrank'
    session_id = ''
    credential_id = 'JSESSIONID'
    session = None
    current_teamraid_id = None
    def __init__(self):
        self.session = requests.session()

    def prepare_request(func):
        def _prepare_request( self, *args, **kwargs ) :
            self.login()
            self.set_last_teamraid()
            return func( self, *args, **kwargs )
        return _prepare_request

    def login(self):
        if self.session_id is not '':
            pass
        self.session.request('post', self.url_login)
        cookies = self.session.cookies.get_dict()
        self.session_id = cookies[self.credential_id]

    def set_last_teamraid(self):
        if self.current_teamraid_id is not '':
            pass
        data = { "method": "teamraidlist", "params": '{}' }
        response = self.get_response(self.url_teamraid, data)
        results = response.json()['result']
        self.current_teamraid_id = results[0]['teamraidid']

    def get_response(self, _url, _data = None):
        headers = { "Cookie": self.credential_id + '=' + self.session_id }
        response = self.session.request('post', url = _url, data = _data, headers = headers )
        return response

    @prepare_request
    def get_team(self, name):
        param = {"teamraidid":self.current_teamraid_id,"guildid":"","guildname":name}
        data ={ "method": "getGuildrank", "params": json.dumps(param) } 
        response = self.get_response(self.url_guildrank, data)
        team = response.json()['result'][0]
        return team

    @prepare_request
    def list_member(self, name):
        team = self.get_team(name)
        guildid = team['guildid']
        param = {"teamraidid":self.current_teamraid_id,"guildid":guildid}
        data ={ "method": "getGuilduser", "params": json.dumps(param) } 
        response = self.get_response(self.url_guildrank, data)
        members = response.json()['result']
        for member in members:
            member['team'] = team
        return members

    @prepare_request
    def list_score(self, userid):
        param = {"teamraidid":self.current_teamraid_id,"userid":userid}
        data ={ "method": "getUserDayPoint", "params": json.dumps(param) } 
        response = self.get_response(self.url_userrank, data)
        scores = response.json()['result']
        return scores

    @prepare_request
    def report_team_members(self, name):
        members = self.list_member(name)
        for member in members:
            member['Score'] = self.list_score(member['userid'])
        return members