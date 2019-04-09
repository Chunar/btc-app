import React, { Component } from 'react';
import Nav from './nav';
import Alert from './alert';

class Hero extends Component {
    
    heroStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: '73%',
        background: 'linear-gradient(152.11deg, #0FB786 0%, #B0DF77 100%)'
    }

    render() { 
        return ( 
            <div style={this.heroStyles}>
                <Nav />
                <Alert />
            </div>
         );
    }
}
 
export default Hero;