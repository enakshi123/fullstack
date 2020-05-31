import React, { Component } from 'react';
// import '../style/home.css';
import { Link } from 'react-router-dom';
import '../css/f1.css';

class HomeComponent extends Component {

    render(){
        return(
            <div className = "sidebar">
                <button className="filter-button"><Link to = "/filter1">FILTER 1</Link></button>
                <br></br>
                <button className="filter-button"><Link to = "/filter2">FILTER 2</Link></button>
                <br></br>
                <button className="filter-button"><Link to = "/filter3">FILTER 3</Link></button>
                <br></br>
                <button className="filter-button"><Link to = "/filter4">FILTER 4</Link></button>
                <br></br>
            </div>
        );
    }
}

export default HomeComponent;