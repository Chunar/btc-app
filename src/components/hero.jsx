import React, { Component } from 'react';
import {Nav} from './nav';
import {Alert} from './alert/alert';

const Styles = {
    background: 'linear-gradient(152.11deg, #0FB786 0%, #B0DF77 100%)',
    height: 772
};

export class Hero extends Component {

    render() { 
        return ( 
            <div style={Styles}>
                <Nav />
                <button style={
                                {
                                position: 'absolute',
                                left: '10.49%', 
                                right: '78.12%',
                                top: '59.71%',
                                bottom: '35.04%',
                                background: '#FFFFFF',
                                boxShadow: '0px 2px 4px rgba(100, 100, 100, 0.5)',
                                borderRadius: 4,
                                fontSize: 12,
                                color: '#3DC281'}}>
                    CREATE ACCOUNT
                </button>
                <Alert />
            </div>
         );
    }
}