import React from 'react';
import ReactDOM from 'react-dom';
import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';

class AppComponent extends React.Component {
    constructor(properties) {
        super(properties);

        console.log('Application Initialized!');
    }
    render() {
      let markup = (
          <div>
              <h1>Welcome to the World of React!</h1>
              <HeaderComponent title='React Training @cvent on a Saturday!'/>
              <FooterComponent footerText='---My Custom Footer---'/>
          </div>
      );
        return markup;
    };
}

let appElement = document.getElementById('app');
ReactDOM.render(<AppComponent />, appElement);