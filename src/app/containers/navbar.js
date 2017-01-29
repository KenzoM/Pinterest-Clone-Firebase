import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';

import { Link } from 'react-router';

var styles = {
  appBar: {
    flexWrap: 'wrap'
  },
  tabs: {
    width: '100%'
  }
}

const AppBarExampleIcon = () => (
  <AppBar showMenuIconButton={false} style={styles.app} >
    <Tabs style={styles.tabs} value={0} initialSelectedIndex={0}>
      <Tab label='Home' value={0} containerElement={<Link to="/" />} />
      <Tab label='About' value={1} containerElement={<Link to="/about" />} />
    </Tabs>
  </AppBar>
);

export default AppBarExampleIcon;
