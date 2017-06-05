import React from 'react'

class Home extends React.Component {
  render() {
    let markup = (
      <div className="jumbotron">
        <h1>Home</h1>
        <p>This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
        <p>
        <a className="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs &raquo;</a>
        </p>
      </div>
    );
    return markup;
  }
}
export default Home
