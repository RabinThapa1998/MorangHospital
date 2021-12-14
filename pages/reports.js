import React,{useRef, useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Head from 'next/head';
export default function Reports(props) {

  return (
  <>
  <Head>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
    </Head>

    <Container fixed sx={{height:'100vh'}}>
      <Typography variant='h3'>Reports</Typography>
    </Container>
  </>
  );
}
