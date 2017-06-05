import React from 'react';

class Sidebar extends React.Component {
    render() {
        let sidebar = (
            <div id="sidebar">
                <p></p>
                <h3>Our Services</h3>
                <ul>
                    <li><a href="#">Starter Web Hosting</a></li>
                    <li><a href="#">Business Web Hosting</a></li>
                    <li><a href="#">VPS Servers</a></li>
                    <li><a href="#">Dedicated Servers</a></li>
                    <li><a href="#">Templated Web Design</a></li>
                    <li><a href="#">Custom Web Design</a></li>
                </ul>
                <h3>Latest Clients</h3>
                <ul>
                    <li><a href="#">Top 100 Web Hosting</a></li>
                    <li><a href="#">Free Web Templates</a></li>
                    <li><a href="#">WordPress Themes</a></li>
                    <li><a href="#">Company Name</a></li>
                    <li><a href="#">Another Company Name</a></li>
                </ul>
            </div>
        );
        return sidebar;
    };
}

export { Sidebar };