import React from 'react';
import { Logo } from './logo';
import { Menu } from './menu';

class HeaderComponent extends React.Component {
    render() {
        let headerMarkup = (
            <div id="header">
                <Logo />
                <Menu />
            </div>
        );
        return headerMarkup;
    };
}

export { HeaderComponent };