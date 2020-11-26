import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Box, Grid} from '@material-ui/core';
import { ReactComponent as Logo }from './../../assets/logo.svg';
import { ReactComponent as LogoutIcon } from './../../assets/user_logout_icon.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.black.main,
    width: '100%',
    height: '5vh',
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
   setValue(newValue);
 };

  return (
       <AppBar position="static">
        <Toolbar className={classes.root}>
           <Grid container>
            <Grid item md={2}></Grid>
            <Grid item md={4}>
              <Typography> Coordenação de Participação Popular da Câmara dos Deputados </Typography>
           </Grid>
           <Grid item md={4}></Grid>
           <Grid item md={2}>
              <Typography>2020 - Dashboard da Participação </Typography>
            </Grid>
           </Grid>
        </Toolbar>
       </AppBar>
   );
}
