import KeyValuePair from './KeyValuePair';

interface ApiRoute {
    method: string;
    headers: KeyValuePair<string>[];
}

export default ApiRoute;