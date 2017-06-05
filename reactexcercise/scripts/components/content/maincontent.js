import React from 'react';

class MainContent extends React.Component {
    render() {
        let content = (
            <div id="maincontent">
                <h2>Welcome to Professional</h2>
                <p>This is <strong>Professional</strong>, a standards-compliant CSS template designed by <a href="http://www.100webhosting.com/">100 Web Hosting</a>. This web template is released under a <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a> license, so you are free to use it for your website (even use it commercially) provided you keep the links in the footer intact. Other than that, you can customize it freely.</p>
                <p>If you plan to get a web hosting plan, make sure you check out <strong>100 Web Hosting</strong> - an independent web hosting reviews, ratings and comparison resource.</p>
                <br />

                <h2>Lorem ipsum sed aliquam</h2>
                <p>Etiam vehicula, augue eu ultricies dictum, orci nisi suscipit sem, nec sollicitudin neque est ac massa. Phasellus elementum nibh vel odio. Proin orci nulla, viverra tempus, pharetra ut, varius nec, justo. Donec euismod molestie erat. Nulla lobortis bibendum magna. Nulla adipiscing justo eu erat.</p>
                <p>Phasellus elementum nibh vel odio. Proin orci nulla, viverra tempus, pharetra ut, varius nec, justo. Donec euismod molestie erat.</p>
            </div>
        );
        return content;
    };
}

export { MainContent };