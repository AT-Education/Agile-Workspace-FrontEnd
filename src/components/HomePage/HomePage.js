import React from 'react';
import './HomePage.css';
import Header from '../Header/Header';

function HomePage(props){
    return(
        <div>
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
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
            </nav> */}
            <Header>
            {/* <div style={{verticalAlign:'center'}}> */}
            <label className="HomePageLayout"><h1>Welcome to Agile Workspace</h1></label>
            </Header>
            {/* </div> */}

        </div>
    )
}
export default HomePage;