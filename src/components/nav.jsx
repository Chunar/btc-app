import React, { Component } from 'react';

class Nav extends Component {

    navStyles = {
        position: 'absolute',
        left: '10%',
        right: '10%',
        top: '3%',
        bottom: '94%'
    }

    changeStyles = {
        position: 'absolute',
        left: '10%',
        right: '84%',
        top: '3%',
        bottom: '94%',
        font: 'SourceSansPro',
        fontSize: 17,
        color: '#FFFFFF'
    }

    signStyles = {
        position: 'absolute',
        left: '84%',
        right: '10%',
        top: '3%',
        bottom: '94%',
        font: 'SourceSansPro',
        fontSize: 17,
        color: '#FFFFFF'
    }

    render() { 
        return ( 
        <div style={this.navStyles}>
            <span style={this.changeStyles}>Changelly</span>
            <span style={this.signStyles}>Sign In</span>
        </div> );
    }
}
export default Nav;