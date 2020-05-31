import React, { Component } from 'react';
import F2ResultComponent from './F2ResultComponent';
import F2InputComponent from './F2InputComponent';


class Filter2Component extends Component {

    state = {
        data: null
    }

    constructor(props){
        super(props);

        this.setData = this.setData.bind(this);
    }

    setData(data){

        this.setState({data: data});
    }


    render(){

        return(
            <div >
                
                {
                    this.state.data == null ?
                        <F2InputComponent setData = {this.setData}/> 
                    :
                        <div>
                            <F2InputComponent setData = {this.setData}/> 
                            <F2ResultComponent data = {this.state.data} />
                        </div>
                } 

            </div>
        );
    }
}

export default Filter2Component;