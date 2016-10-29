import React from 'react';

if (process.env.BROWSER) {
  require('assets/styles/home.scss');
}

export default class Home extends React.Component {
  render() {
    return <div className="home-page">Home Page</div>;
  }
}