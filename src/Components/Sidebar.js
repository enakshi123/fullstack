import React from 'react';
import '../css/sidebar.css';


function Sidebar(){
    return(
        <div>
            <div className="sidebar">
            
            <nav>
                    <a className="s-link" href="/Filter1Component">Filter1</a>
                    <a className="s-link" href="/Filter2Component">Filter2</a>
                    <a className="s-link" href="/Filter3Component">Filter3</a>
                    <a className="s-link" href="/Filter4Component">Filter4</a>      

                </nav>
            </div>                
        </div>

    );
}

export default Sidebar;