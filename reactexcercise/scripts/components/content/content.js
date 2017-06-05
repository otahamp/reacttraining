import React from 'react';
import { MainContent } from './maincontent';
import { Sidebar } from './sidebar';

class ContentComponent extends React.Component {
    render() {
        let contentMarkup = (
            <div id="content">
                <MainContent />
                <Sidebar />
                <div style={{clear: "both"}}>&nbsp;</div>
            </div>
        );
        return contentMarkup;
    };
}

export { ContentComponent };