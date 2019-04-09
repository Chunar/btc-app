import React, { Component } from 'react';

class AlertText extends Component {

    textStyles = {
        position: 'relative',
        left: '15%',
        right: '55%',
        top: '20%',
        bottom: '75%',
        font: 'SourceSansPro',
        fontSize: 14,
        color: '#FFFFFF',
    }

    render() { 
        return ( <div>
            <span style={this.textStyles}>Catch mouse and gave it as a present chew the plant but scratch</span>
        </div> );
    }
}
 
export default AlertText;