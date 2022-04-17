import React, { Component } from 'react';
import './headertitle.css';

class HeaderTitle extends Component {
    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">{this.props.title}</h1>
            </header>
        );
    }
}

export default HeaderTitle;
