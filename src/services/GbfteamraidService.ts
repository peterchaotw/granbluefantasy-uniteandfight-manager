import * as url from 'url';
import ApiInfo from '../models/ApiInfo';

class GbfteamraidService {
    Api: ApiInfo = {
        url: "http://info.gbfteamraid.fun/",
        Routes: {
            "login":
            {
                method: "GET",
                headers: [
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
            mode: "cors",
            headers: {
                "Origin": service.Api.url,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
            }
        }).then(function (result) {
            console.log(result);
        }).catch(function (err) {
            service.CookieId = "";
        });
    }
}

export default GbfteamraidService;