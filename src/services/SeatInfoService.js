import axios from "axios";

export function fetchSeatInfo(){
    const url = "https://agileworkspace-backend.azurewebsites.net/api/SeatAllocation";
    return axios.get(url);
}