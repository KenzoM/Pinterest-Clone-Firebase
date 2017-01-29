import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from '../containers/navbar';
// import Footer from './footer';
import '../stylesheets/style.scss';

export default class App extends Component {
  render() {
      return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
