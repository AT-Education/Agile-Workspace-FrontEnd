import React from 'react';
import './Header.css';

function Header(props){
    return(
        <div className="container">
            {/* <div className="row HeaderLabel">
                <div className="col-sm">
                <label style={{color:'#064157'}}><h3>Agile Workspace</h3></label>   
                    </div>                          
            </div> */}
            <nav className="navbar navbar-expand-lg navbar navbar-light" >
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/registration">Registration</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/seatinfo">Seating Info</a>
                    </li>
                    </ul>
                </div>
            </nav>
            {props.children}
        </div>
    )
}
export default Header;