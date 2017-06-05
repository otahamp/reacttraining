import React from 'react';

class Header extends React.Component {
    constructor(properties) {
        super(properties);
    }
    render() {
        let header = (
            <header>
                <h1>{this.props.title}</h1>
            </header>
        );
        return header;
    };
}

export default Header;
