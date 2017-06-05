import React from 'react';
import ReactDOM from 'react-dom';

import { HeaderComponent } from './components/header/header';
import { HeaderImage } from './components/header/headerimage';
import { FooterComponent } from './components/footer';
import { ContentComponent } from './components/content/content';

class AppComponent extends React.Component {
    constructor(properties) {
        super(properties);

        console.log('Application Initialized!');
    }
    render() {
        let footer = "<p> &copy; 2011 Sitename.com. Design by <a href='http://www.100webhosting.com/'>100 Web Hosting</a>. </p>"
        let markup = (
            <div>
                <HeaderComponent/>
                <HeaderImage />
                <ContentComponent />
                <FooterComponent footerContent = {footer}/>
            </div>
    );
        return markup;
    };
}

let appElement = document.getElementById('app');
ReactDOM.render(<AppComponent />, appElement);