import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/'
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';

class Navbar extends Component {
  constructor(props){
    super(props);
  }

  renderTabs(){
    const { authenticated } = this.props;
    if(authenticated){
      return [
        <Tab label='Signoff' value={4} key={2} onClick={() => this.onSignOffClick()}/>
      ]
    } else{
      return [
        <Tab label='Login' value={2} key={0} containerElement={<Link to="/login" />}/>
      ]
    }
  }
  onSignOffClick(){
    const { signoutUser, tabIndex } = this.props
    if (confirm('Are you sure you to signoff?')) {
      this.props.signoutUser();
    }
  }

  render() {
    const { tabIndex } = this.props
    var styles = {
      appBar: {
        flexWrap: 'wrap'
      },
      tabs: {
        width: '100%'
      }
    }
    return (
      //containerElement solution was found in stackoverflow to corporate
      //React-Router and Material-UI
      <div className="nav-bar">
        <AppBar showMenuIconButton={false} style={styles.appBar} >
          <Tabs style={styles.tabs} value={tabIndex} initialSelectedIndex={tabIndex}>
            <Tab label='Home' value={0} containerElement={<Link to="/" />} />
            <Tab label='About' value={1} containerElement={<Link to="/about" />} />
            {this.renderTabs()}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    tabIndex: state.tabIndex.tab_index,
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, actions)(Navbar);
