import React, { Component } from 'react';

class F1ResultComponent extends Component {

    render() {

        const data = this.props.data;
        console.log(data[0])

        return(
            <div >
                {
                    data[0] === "" ?
                        <div>
                        </div>
                    :
                        <div>
                            <p>{data[0]}</p>
                            <p>{data[1]}</p>
                        </div>
                }
            </div>
        );
    }

}

export default F1ResultComponent;