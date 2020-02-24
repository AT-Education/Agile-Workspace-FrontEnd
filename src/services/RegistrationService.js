import axios from "axios";

export function postEmployeeData(employeeId){

    const url="https://agileworkspace-backend.azurewebsites.net/api/Registration/employee";
    return axios.post(url,{Name:employeeId},{ headers: { 'Content-Type': 'application/json' }});
}
export function postSeatData(seatId){
    const url="https://agileworkspace-backend.azurewebsites.net/api/Registration/seat";
    return axios.post(url,{Name:seatId},{ headers: { 'Content-Type': 'application/json' }});
}