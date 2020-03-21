import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const TopBar = () => {
  return (
    <AppBar position="fixed" className="appBar">
      <Toolbar>
        <Typography variant="h2">
         Corona Safe Care
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
