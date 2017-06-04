import React from 'react';

class FooterComponent extends React.Component {
    constructor(properties) {
        super(properties);
        console.log('Footer Component Initialized!');
    }
    render() {
        let footerMarkup = (
            <div>
                <h2>{this.props.footerText}</h2>
            </div>
        );
        return footerMarkup;
    };
}

export { FooterComponent };