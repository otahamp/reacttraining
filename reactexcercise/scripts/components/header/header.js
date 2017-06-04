import React from 'react';
import { Logo } from './logo';
import { Menu } from './menu';
import { HeaderImage } from './headerimage';

class HeaderComponent extends React.Component {
    render() {
        let headerMarkup = (
            <div id="header">
                <Logo/>
                <Menu/>
                <HeaderImage/>
            </div>
        );
        return headerMarkup;
    };
}

export { HeaderComponent };