from gbfteamraid import gbfteamraid
from data_handler import data_handler

def read_member_list():
	res = []
	with open('teams.txt', 'r') as file_to_read:
		while True:
			lines = file_to_read.readline().replace('\n', '')
			if not lines:
				break
			res.append(lines)
			pass
	return res

def main():
    teams = read_member_list()
    service = gbfteamraid()
    members =[]
    for team in teams:
        _members = service.report_team_members(team)
        members = members+_members
    handler = data_handler(members)
    handler.export_csv_report()

    
if __name__ == "__main__":
    main()