import React, { Component } from 'react';
import AlertText from './alertText';

class Alert extends Component {

    styles = {
        position: 'absolute',
        left: '10%',
        right: '56%',
        top: '20%',
        bottom: '75%',
        background: 'linear-gradient(152.11deg, #0FB786 0%, #B0DF77 100%)',
        opacity: 0.35,
        borderRadius: 100
    }

    render() { 
        return (<div style={this.styles}>
            <AlertText />
        </div>  );
    }
}
 
export default Alert;