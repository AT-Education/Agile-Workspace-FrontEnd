import React from 'react';

function Menu(props){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
    )
}
export default Menu;