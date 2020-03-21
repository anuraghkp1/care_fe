import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginTop: '15px',
    fontWeight: 600,
    textAlign: 'center',
  },
  noteCardContent: {},
  marginTop8: {
    marginTop: '8px',
  },
}));

const Dashboard = (props: any) => {
  const classes = useStyles();
  const dispatch: any = useDispatch();
  const state: any = useSelector(state => state);
  return (
    <div>
      <h1> Welcome to Coronasafe Care </h1>
    </div>
  );
};
export default Dashboard;
