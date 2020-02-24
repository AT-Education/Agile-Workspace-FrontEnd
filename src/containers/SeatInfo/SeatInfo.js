import React from 'react';
import { fetchSeatInfo } from '../../services/SeatInfoService';
import Header from '../../components/Header/Header';

class SeatInfo extends React.Component{
    state = {
        seatInfoList:[]
    }

    async componentDidMount(){
        try{
        const seatInfoServiceResponse = await fetchSeatInfo();
        console.log(seatInfoServiceResponse.data);
        this.setState({seatInfoList:seatInfoServiceResponse.data})
        }catch(err){
            console.log("Exception in fetchSeatInfo service")
        }
    }

    render(){
        const {seatInfoList} = this.state;
        return(
            <Header>
            {
                seatInfoList.length > 0?(
                    <table className="table table-hover" style={{marginTop:40}}>
                        <thead>
                            <tr>
                                <th scope="col">Employee Name</th>
                                <th scope="col">Seat Number</th>
                            </tr>
                        </thead>
                            <tbody>
                                {
                            seatInfoList.map(item=>(
                                    <tr key={item.employeeId}>
                                        <td>{item.name}</td>
                                        <td>{item.seatId}</td>
                                    </tr>                        
                            ))
                            }
                            </tbody>         
                    </table>
                ):null
            }
            </Header>
        )
    }
}
export default SeatInfo;