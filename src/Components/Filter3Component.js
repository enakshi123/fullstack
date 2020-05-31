import React, { Component } from 'react';
import F3ResultComponent from './F3ResultComponent';
import F3InputComponent from './F3InputComponent';


class Filter3Component extends Component {

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
                        <F3InputComponent setData = {this.setData}/> 
                    :
                        <div>
                            <F3InputComponent setData = {this.setData}/> 
                            <F3ResultComponent data = {this.state.data} />
                        </div>
                } 

            </div>
        );
    }
}

export default Filter3Component;