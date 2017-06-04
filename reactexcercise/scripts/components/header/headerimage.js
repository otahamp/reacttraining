import React from 'react';

class HeaderImage extends React.Component {
    render() {
        let headerImage = (
            <div id="headershadow">
                <a href="#">
                    <img src="../../../images/header-picture.jpg" alt="" width="877" height="150" />
                </a>
            </div>
        );
        return headerImage;
    };
}

export { HeaderImage };