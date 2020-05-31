import React, { Component } from "react";

class Filter1InputComponent extends Component {

    state = {
        data: []
    }

    constructor(props){
        super(props);

        this.apply = this.apply.bind(this);
    }

    apply(){

        this.state.data.push(document.getElementById("discount").value);
        this.state.data.push(document.getElementById("category").value);

    }

    render(){

        return(
            <div  className = "container">

                <h2 id = "filter1">FILTER 1</h2>

                <form className="form">
                    <label htmlFor = "discount" className = "labe">Discount:  </label>
                    <label htmlFor = "discount" className = "label category"> Category: </label> <br />
                    <input type = "text" className = "input" name = "discount" placeholder = "Enter Discount" id = "discount" />
                    <select className = "input select" name = "category" id = "category">
                        <option value = "Greater"> Greater </option>
                        <option value = "Smaller"> Smaller </option>
                        <option value = "Equal"> Equal </option>
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

export default Filter1InputComponent;