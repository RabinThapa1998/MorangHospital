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

export default function Reports(props) {

  return (
  <>
    <Container fixed sx={{height:'100vh'}}>
      <Typography variant='h3'>Reports</Typography>
    </Container>
  </>
  );
}
