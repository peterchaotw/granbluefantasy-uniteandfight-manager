import * as url from 'url';
import ApiInfo from '../models/ApiInfo';
import fetch from 'cross-fetch';

class GbfteamraidService {
    Api: ApiInfo = {
        url: "http://info.gbfteamraid.fun/",
        Routes: {
            "login":
            {
                method: "POST",
                headers: [
                    { "Cookie": "" }
                ]
            },
            "userrank": {
                method: "POST",
                headers: [
                    { "Cookie": "" }
                ],
            },
            "getGuilduser": {
                method: "POST",
                headers: [
                    { "Cookie": "" }
                ]
            },

        }
    };
    CookieId: string;
    constructor() {
    }

    login() {
        let service = this;
        let loginUrl = url.resolve(service.Api.url, 'login');
        debugger;
        fetch(loginUrl, {
            method: this.Api.Routes.login.method,
            headers: {
            }
        }).then(function (result:any) {
            console.log(result);
        }).catch(function (err:any) {
            service.CookieId = "";
        });
    }
}

export default GbfteamraidService;