import React, { Component } from "react";

class Filter3InputComponent extends Component {

    state = {
        data: []
    }

    constructor(props){
        super(props);

        this.apply = this.apply.bind(this);
    }

    apply(){

        this.state.data.push(document.getElementById("stock").value);
        this.state.data.push(document.getElementById("category").value);

    }

    render(){

        return(
            <div className = "container">

                <h2 id = "filter3">FILTER 3</h2>

                <form >
                    <label htmlFor = "stock" className = "label">Stock Available:  </label>
                    <label htmlFor = "stock" className = "label category"> Category: </label> <br />
                    <input type = "text" className = "input" name = "stock" placeholder = "Enter Availability" id = "stock" />
                    <select className = "input select" name = "category" id = "category">
                        <option value = "Greater"> Equals </option>
                        <option value = "Smaller"> Not Equals </option>
                        <option value = "Equal"> Empty</option>
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

export default Filter3InputComponent;