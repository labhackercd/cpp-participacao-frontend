import React, { useState } from 'react'
import { Drawer, Divider, Grid, Typography, IconButton }  from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import MenuItens from './menuItens';
import clsx from 'clsx';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    margin: '10rem 0 0 0',
    color: theme.palette.lightGrey.main,
  },
  homeMenuContainer: {
    margin: '2rem 0 0 2rem',
    width: 'auto',
  }
}));

export default function HomeMenu(props) {
  const classes = useStyles()
  const [open, setOpen] = useState(props.open);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Grid container className={classes.homeMenuContainer}>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          root: "margin: '10rem'",
        }}
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
        open={open}
      >
      <MenuItens></MenuItens>
      <Grid container className={classes.toolbarIcon}>
      <Divider light />
        { open ?
            <>
            <Grid item md={7}></Grid>
            <Grid item md={3}>
              <Typography style={{color: classes.toolbarIcon.color}}>ocultar</Typography>
            </Grid>
            <Grid item md={2}>
            <IconButton onClick={handleDrawerClose} id="drawer-close">
              <ChevronLeftIcon style={{color: '#979797'}} />
            </IconButton>
            </Grid>
            </>  :
            <IconButton onClick={handleDrawerOpen} id="drawer-open">
              <ChevronRightIcon style={{color: '#979797'}} />
            </IconButton>
          }
      </Grid>
      </Drawer>
    </Grid>
  )
}
