import React, { Component } from 'react';
import F1ResultComponent from './F1ResultComponent';
import F1InputComponent from './F1InputComponent';


class Filter1Component extends Component {

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
                        <F1InputComponent setData = {this.setData}/> 
                    :
                        <div>
                            <F1InputComponent setData = {this.setData}/> 
                            <F1ResultComponent data = {this.state.data} />
                        </div>
                } 

            </div>
        );
    }
}

export default Filter1Component;