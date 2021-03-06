/* eslint-disable react/prop-types */
import {
  AppBar, Toolbar, makeStyles, IconButton, Drawer, Box, Tab, Tabs,
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import logoCamaraDosDeputados from '../assets/images/logos/logo_cd.svg';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.black.main,
    paddingRight: '79px',
    paddingLeft: '10vh',
    '@media (max-width: 1100px)': {
      paddingLeft: 0,
    },
  },
  logo: {
    fontWeight: 600,
    color: '#FFFEFE',
    textAlign: 'left',
  },
  menuButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
    marginLeft: '38px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
  mobileToolBar: {
    background: 'green',
  },
  drawerContainer: {
    padding: '20px 60px',
  },
  drawerMobile: {
    background: '#252525',
    color: 'white',
  },
  divider: {
    background: 'white',
  },
  icon: {
    color: 'white',
  },
  tab: {
    height: '92%',
    textTransform: 'capitalize',
    fontWeight: '600',
    margin: '0rem 0 0 3rem',
  },
  tabs: {
    marginLeft: '2vh',
  },
  offset: theme.mixins.toolbar,
}));

function LinkTab(parans) {
  const classes = useStyles();
  const { url, ...props } = parans;
  return (

    <Link href={{ pathname: url }}>
      <Tab className={classes.tab} {...props} />
    </Link>

  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
  };
}

export default function PageNavbar(props) {
  const {
    header, drawerContainer, drawerMobile, divider, tabs, offset,
  } = useStyles();
  const { value } = props;

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => (window.innerWidth < 1100
      ? setState((prevState) => ({ ...prevState, mobileView: true }))
      : setState((prevState) => ({ ...prevState, mobileView: false })));

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const camaraDeputadosLogo = (
    <img src={logoCamaraDosDeputados} alt="Logo Câmara dos Deputados" />
  );

  function NavTabs(options) {
    const { orientation } = options;

    return (
      <Tabs value={value} className={tabs} TabIndicatorProps={{ style: { background: 'white' } }} orientation={orientation}>
        <LinkTab
          label="Painel da Participação"
          aria-label="Painel da Participação"
          aria-selected={false}
          url={`${process.env.NEXT_PUBLIC_INITIAL_PAGE_URL}`}
          index="0"
          {...a11yProps(0)}
        />
        <LinkTab
          id="audienciasPanelTab"
          label="Audiências Interativas"
          aria-label="Página Audiências"
          aria-selected
          url={`${process.env.NEXT_PUBLIC_AUDIENCIAS_PAGE_URL}`}
          index="1"
          {...a11yProps(1)}
        />
        <LinkTab
          id="wikilegisPanelTab"
          label="Wikilegis"
          aria-label="Página Wikilegis"
          aria-selected={false}
          url={`${process.env.NEXT_PUBLIC_WIKILEGIS_PAGE_URL}`}
          index="2"
          {...a11yProps(2)}
        />
        <LinkTab
          id="sobrePanelTab"
          label="Sobre"
          aria-label="Página sobre"
          aria-selected={false}
          url={process.env.NEXT_PUBLIC_SOBRE_PAGE_URL}
          index="3"
          {...a11yProps(3)}
        />
        <LinkTab
          id="apiPanelTab"
          label="APIs"
          aria-label="Página apis"
          aria-selected={false}
          url={process.env.NEXT_PUBLIC_API_PAGE_URL}
          index="4"
          {...a11yProps(4)}
        />
      </Tabs>
    );
  }

  const displayDesktop = () => (
    <Toolbar>
      {camaraDeputadosLogo}
      <Box width="100%" display="flex" alignContent="space-between">
        <NavTabs orientation="horizontal" />
      </Box>
    </Toolbar>
  );

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerClose}
          classes={{ paper: drawerMobile }}
        >
          <IconButton onClick={handleDrawerClose} style={{ color: 'white' }}>
            <ChevronLeftIcon />
          </IconButton>
          <Divider className={divider} variant="middle" />
          <div className={drawerContainer}><NavTabs orientation="vertical" /></div>
        </Drawer>

        <div>{camaraDeputadosLogo}</div>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar position="absolute" className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
      <div className={offset} />
    </header>
  );
}
