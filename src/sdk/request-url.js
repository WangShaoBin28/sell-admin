import {api_request} from '@/plugins/axios'

const Api = {};
Api['info'] = {'url': '/apis/ithil_j/activity/movie_annual2017', 'method': 'get', 'token_ignored': 'false', 'anonymous': 'false'};
Api['info2'] = {'url': '/user/one', 'method': 'get', 'token_ignored': 'false', 'anonymous': 'false'};
const APISDK = {};
for (const name in Api) {
    APISDK[name] = (options) => {
        return api_request(Api[name], options);
    }
}
export default APISDK;
