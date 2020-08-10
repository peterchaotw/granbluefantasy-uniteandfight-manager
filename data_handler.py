import csv
import os
import datetime
import codecs

class data_handler:

    members = None

    def __init__(self, members):
        self.members = members

    def export_csv_report(self):
        dir = os.path.dirname(__file__)
        file_date = datetime.datetime.now().strftime("%Y_%m_%d_%H%M%S")
        team_names = set([member['team']['name'] for member in self.members])
        for team_name in team_names:
            team_name_utf8 = team_name.encode('utf-8')
            filename = team_name_utf8 + file_date + '.csv'
            team_members = [member for member in self.members if member['team']['name'] == team_name]
            with open(dir + filename, 'w') as csvfile:
                fieldnames = ['Team Name','Name', 'Points',  'Total Points', 'Date']
                csvfile.write(codecs.BOM_UTF8)
                writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
                writer.writeheader()
                for member in team_members:
                    name = member['name'].encode('utf-8')
                    scores = member['Score']
                    if len(scores) > 0:
                        for score in scores:
                            line = {'Team Name': team_name_utf8, 'Name': name}
                            line['Points'] = score['minp'].encode('utf-8')
                            line['Total Points'] = score['maxp'].encode('utf-8')
                            line['Date'] = score['updatedate'].encode('utf-8')
                            writer.writerow(line)
                    else:
                        line = {'Team Name': team_name_utf8, 'Name': name, 'Points': '', 'Total Points':'' , 'Date': ''}
                        writer.writerow(line)
            






