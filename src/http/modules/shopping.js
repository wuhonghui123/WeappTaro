

import * as axios from "src/http/axios";

export function ToGenerateOrders(url,params){
    return axios.post(url,params);
}