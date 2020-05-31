import React, { Component } from "react";

class Filter4InputComponent extends Component {

    state = {
        data: []
    }

    constructor(props){
        super(props);

        this.apply = this.apply.bind(this);
    }

    apply(){

        this.state.data.push(document.getElementById("created").value);
        this.state.data.push(document.getElementById("category").value);

    }

    render(){

        return(
            <div  className = "container">

                <h2 id = "filter4">FILTER 4</h2>

                <form >
                    <label htmlFor = "created" className = "label">Created At:  </label>
                    <label htmlFor = "created" className = "label category"> Category: </label> <br />
                    <input type = "text" className = "input" name = "created" placeholder = "Created_At" id = "created" />
                    <select className = "input select" name = "category" id = "category">
                        <option value = "Greater"> Between </option>
                        <option value = "Smaller"> Before</option>
                        <option value = "Equal"> After</option>
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

export default Filter4InputComponent;