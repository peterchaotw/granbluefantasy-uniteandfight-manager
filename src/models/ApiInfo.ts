import ApiRoute from './ApiRoute';
import KeyValuePair from './KeyValuePair';

interface ApiInfo {
    url: string;
    Routes: KeyValuePair<ApiRoute>;
}

export default ApiInfo;