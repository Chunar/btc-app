import React, { Component } from 'react';

const navStyles = {
    left: '10.42%',
    right: '10.62%',
    top: '3.02%',
    bottom: '94.09%'
}

export class Nav extends Component {

    changeStyles = {
        position: 'absolute',
        left: '10.42%',
        right: '84.31%',
        top: '3.02%',
        bottom: '94.09%',
        fontSize: 15,
        color: '#FFFFFF'
    }

    signStyles = {
        position: 'absolute',
        left: '84%',
        right: '10%',
        top: '3.02%',
        bottom: '94.09%',
        fontSize: 15,
        color: '#FFFFFF'
    }

    render() { 
        return (
        <div>
            <span style={this.changeStyles}>Changelly</span>
            <span style={this.signStyles}>Sign In</span>
        </div>)
    };
}