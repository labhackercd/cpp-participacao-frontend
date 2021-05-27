/* eslint-disable react/prop-types */
/* eslint-disable no-await-in-loop */
import React from 'react';
// import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PageNavbar from '../layouts/navbar';
import Footer from '../components/Footer/index';

import error404Image from '../assets/images/informations/404_image.png';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    // QHD/WQHD (2560×1440) QUADHD - 4K UHD (3840×2160) 4K ULTRA HD:
    '@media (min-width: 2300px)': {
      height: '100vh',
      width: '100vw',
    },
    backgroundColor: theme.palette.primary.main,
  },
  box: {
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
  },
  boxHeader: {
    flex: '0 1 auto',
  },
  boxContent: {
    flex: '1 1 auto',
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10vh',
  },
  textBox: {
    paddingBottom: '20px',
  },
  typographyTitle: {
    fontFamily: 'Open Sans',
    fontSize: '3rem',
    letterSpacing: '0.05em',
    fontWeight: 'bold',
  },
  typographySubTitle: {
    fontFamily: 'Open Sans',
    fontSize: '2rem',
    letterSpacing: '0.05em',
    fontWeight: 'bold',
    margin: '10px',
  },
  typographyInfoText: {
    fontFamily: 'Open Sans',
    fontSize: '1.4rem',
    letterSpacing: '0.05em',
    color: '#E6E6E6',
  },
}));

function Custom404() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>Painel da Participação Erro 404</title>
      </Head>
      <Box className={classes.box}>
        <Box className={classes.boxHeader}>
          <PageNavbar value={null} />
        </Box>
        <Box className={classes.boxContent}>
          <Box className={classes.textBox}>
            <Typography className={classes.typographyTitle} align="center">
              {'<Erro 404 />'}
            </Typography>
            <Typography className={classes.typographySubTitle} align="center">
              Página não encontrada
            </Typography>
            <Typography className={classes.typographyInfoText} align="center">
              A URL informada não existe
            </Typography>
          </Box>
          <Box>
            <img
              src={error404Image}
              alt=""
              width="700px"
              height="500px"
            />
          </Box>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </div>
  );
}

export default Custom404;
