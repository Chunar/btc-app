import React, { Component } from 'react';

class AlertNew extends Component {

    divStyles = {
        position:'absolute',
        left: '10.83%',
        right: '86.39%',
        top: '22.05%',
        bottom: '75.85%',
        background: '#28BD84',
        borderRadius: '100px'
    }

    spanStyles = {
        postion: 'absolute',
        left: '11.32%',
        right: '86.81%',
        top: '21.92%',
        bottom: '75.85%',
        fontSize: '13px',
    }

    render() { 
        return (<div style={this.divStyles}>
            <div style={this.spanStyles}>NEW</div>
        </div>);
    }
}

class AlertText extends Component {

    textStyles = {
        position: 'absolute',
        left: '14.1%',
        right: '57.57%',
        top: '21.78%',
        bottom: '75.85%',
        font: 'Source Sans Pro',
        fontSize: '10px',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: "#FFFFFF"
    }

    render() { 
        return ( <span style={this.textStyles}>
        Catch mouse and gave it as a present chew the plant but scratch
        </span> );
    }
}

export class Alert extends Component {

    styles = {
        position: 'absolute',
        left: '10.49%',
        right: '56.04%',
        top: '21.26%',
        bottom: '75.2%',
        background: 'green',
        borderRadius: '100px'
    }

    render() { 
        return (<div style={this.styles}>
            <span>NEW</span>
            <span style={{color: 'white', fontSize: 12}}>Catch mouse and gave it as a present chew the plant but scratch</span>
        </div>  );
    }
}