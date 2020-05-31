import React, { Component } from "react";

class Filter2InputComponent extends Component {

    state = {
        data: []
    }

    constructor(props){
        super(props);

        this.apply = this.apply.bind(this);
    }

    apply(){

        this.state.data.push(document.getElementById("brand").value);
        this.state.data.push(document.getElementById("category").value);

    }

    render(){

        return(
            <div  className = "container">

                <h2 id = "filter2">FILTER 2</h2>

                <form >
                    <label htmlFor = "brand" className = "label">Brand: </label>
                    <label htmlFor = "brand" className = "label category">Category: </label> <br />
                    <input type = "text" className = "input" name = "brand" placeholder = "Enter Brand" id = "brand" />
                    <select className = "input select" name = "category" id = "category">
                        <option value = "Greater"> contains </option>
                        <option value = "Smaller"> does not contain </option>
                        <option value = "Equal"> Not valid </option>
                    </select>
                    <button id = "apply"
                        onClick = {() =>  { this.apply();
                            this.props.setData(this.state.data);   
                        }}> APPLY
                    </button>
                </form>

            </div>
        );
    }
}

export default Filter2InputComponent;