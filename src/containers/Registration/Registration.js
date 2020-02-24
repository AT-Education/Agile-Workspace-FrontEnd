import React from 'react';
import './Registration.css'
import { postEmployeeData } from '../../services/RegistrationService';
import { postSeatData } from '../../services/RegistrationService';
import Header from '../../components/Header/Header';


class Registration extends React.Component{
    state={
        employeeIdValue:"",
        seatNumber:"",
        isException:false,
        formOption:""
    }

    submitEmployeeData = async (e)=>{
        e.preventDefault();
        try{
            
            const postRegistrationDataServiceResponse = await postEmployeeData(this.state.employeeIdValue);
            this.setState({employeeIdValue:""});
            console.log(postRegistrationDataServiceResponse)
            console.log("Inside")
        }
        catch(ex){
            this.setState({isException:true});
            console.log("Exception in postRegistrationDataServiceResponse")
        }
    }
    submitSeatData = async (e)=>{
        e.preventDefault();
        try{
            
            const postRegistrationDataServiceResponse = await postSeatData(this.state.seatNumber);
            this.setState({seatNumber:""});
            console.log(postRegistrationDataServiceResponse.data)
            console.log("Inside")
        }
        catch(ex){
            this.setState({isException:true});
            console.log("Exception in postRegistrationDataServiceResponse")
        }
    }

    renderExceptionMessage(){
        return(
            <div>
                <h5>Something happened.Please try again later</h5>
            </div>
        )
    }

    renderEmployeeForm(){
        return(
        <form onSubmit={this.submitEmployeeData}>
                  <div className="row registrationFormLayout"  style={{marginTop:40}}>
                    <div className="col-sm-3"/>
                    <div className="col-sm-5" style={{marginLeft:100}}>
                            <div className="col-sm-4" style={{textAlign:"center"}}>
                                <label><b>Employee id</b></label>
                            </div>
                            <div className="col-sm-3">
                                <input type="text" 
                                className="form-control" 
                                id="employeeIdTextBox" 
                                placeholder="BNumber"
                                style = {{width: 225}}
                                onChange={e=>this.setState({employeeIdValue:e.target.value})}
                                ></input>
                         </div>
                    </div>
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-3"></div>
                  </div>
                  <div className="row registrationButtonLayout">
                    <div className="col-sm-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </div>
        </form>
        )
    }
    renderSeatForm(){
        return(
        <form onSubmit={this.submitSeatData} style={{marginTop:40}}>
                    <div className="row registrationFormLayout">
                        <div className="col-sm-3"/>
                                <div className="col-sm-5" style={{marginLeft:100}}>
                                    <div className="col-sm-4">
                                        <label style={{float:"center"}}><strong>Seat Number</strong></label>
                                    </div>
                                    <div className="col-sm-3">
                                        <input type="text" 
                                        className="form-control" 
                                        id="seatNumberTextBox" 
                                        placeholder="Seat Number"
                                        style = {{width: 225}}
                                        onChange={e=>this.setState({seatNumber:e.target.value})}></input>
                                    </div>
                                </div>
                        <div className="col-sm-3"/>
                    </div>
                    
                    <div className="row registrationButtonLayout">
                    <div className="col-sm-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                            
                    
        </form>
        )
    }

    render(){
        console.log(this.state.employeeIdValue);
        console.log(this.state.seatNumber);
        console.log(this.state.formOption)

        return(
            <Header isActive={true}>
            <div style={{marginTop:40}}>
              <label><h3>Registration</h3></label>  
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" style={{width:225}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Choose your Option
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" onClick={()=>this.setState({formOption:1})}>Add Employee</button>
                    <button className="dropdown-item" onClick={()=>this.setState({formOption:2})}>Add Seat</button>
                </div>
              </div>
                {
                    this.state.formOption === 1?this.renderEmployeeForm()   :(this.state.formOption === 2)?this.renderSeatForm():null
                }
              <br/> 
              {
              this.state.isException && this.renderExceptionMessage()       
              }    
            </div>
            </Header>
        )
    }
}
export default Registration;