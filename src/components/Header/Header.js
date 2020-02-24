import React from 'react';
import './Header.css';

function Header(props){
    return(
        <div className="container">
            <div className="row HeaderLabel">
                <div className="col-sm">
                <label style={{color:'#064157'}}><h3>Agile Workspace</h3></label>   
                    </div>                          
            </div>
            {props.children}
        </div>
    )
}
export default Header;