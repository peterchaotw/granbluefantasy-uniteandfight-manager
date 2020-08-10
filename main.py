from gbfteamraid import gbfteamraid
from data_handler import data_handler


def main():
    service = gbfteamraid()
    members1 = service.report_team_members('社畜団￥サービス残業')
    members2 = service.report_team_members('QK団￥グラブル残業')
    members = members1 + members2
    handler = data_handler(members)
    handler.export_csv_report()

    
if __name__ == "__main__":
    main()