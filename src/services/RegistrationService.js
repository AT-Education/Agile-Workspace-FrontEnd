import axios from "axios";

export function postEmployeeData(employeeId){

    const url="http://www.mocky.io/v2/5e536b302e0000b50c2dab0a";
    return axios.post(url,{employeeId:employeeId},{ headers: { 'Content-Type': 'application/json' }});
}
export function postSeatData(seatId){
    const url="http://www.mocky.io/v2/5e536b302e0000b50c2dab0a";
    return axios.post(url,{seatId:seatId},{ headers: { 'Content-Type': 'application/json' }});
}