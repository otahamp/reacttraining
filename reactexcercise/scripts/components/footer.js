import React from 'react';

class FooterComponent extends React.Component {
    rawMarkup(){
        var rawMarkup = this.props.footerContent
        return { __html: rawMarkup };
    }
    render() {
        let footerMarkup = (
            <div id="footer">
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
        return footerMarkup;
    };
}

export { FooterComponent };