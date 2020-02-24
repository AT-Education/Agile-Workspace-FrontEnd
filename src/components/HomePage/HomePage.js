import React from 'react';
import './HomePage.css';

function HomePage(props){
    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            </nav>
            {/* <div style={{verticalAlign:'center'}}> */}
            <label className="HomePageLayout"><h1>Welcome to Agile Workspace</h1></label>
            {/* </div> */}

        </div>
    )
}
export default HomePage;