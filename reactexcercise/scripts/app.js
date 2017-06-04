import React from 'react';
import ReactDOM from 'react-dom';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer';
import { ContentComponent } from './components/content';

class AppComponent extends React.Component {
    constructor(properties) {
        super(properties);

        console.log('Application Initialized!');
    }
    render() {
        let markup = (
            <div>
                <HeaderComponent/>
                <ContentComponent/>
                <FooterComponent/>
            </div>
    );
        return markup;
    };
}

let appElement = document.getElementById('app');
ReactDOM.render(<AppComponent />, appElement);