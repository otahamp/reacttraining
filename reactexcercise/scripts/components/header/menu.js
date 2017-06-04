import React from 'react';

class Menu extends React.Component {
    render() {
        let menu = (
            <div id="menu">
                <ul>
                    <li class="first"><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        );
        return menu;
    };
}

export { Menu };