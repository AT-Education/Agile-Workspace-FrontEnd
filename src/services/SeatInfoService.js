import axios from "axios";

export function fetchSeatInfo(){
    const url = "/seatInfoMockData.json";
    return axios.get(url);
}