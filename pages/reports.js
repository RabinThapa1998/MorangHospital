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

const  callbackFunction=(entries)=>{
  const [entry] = entries
  setIsVisible(entry.isIntersecting)
}
const options={
  threshold:0
 }
export default function Reports(props) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('intersection')
    const observer = new IntersectionObserver(
      function(entries,observer){
        entries.forEach(entry=>{
          setIsVisible(entry.isIntersecting);
          // observer.unobserve(entry.target);
        })
      }, options)

    observer.observe(containerRef.current)
    return () => {
      // observer.unobserve(containerRef.current)
    }
  }, [containerRef, options])

  return (
  <>
    <Container>
      <Box sx={{border:'2px dashed black', height:'100vh', bgcolor: 'primary.light'}}>
        <Typography variant='h3' >Welcome To Intersection Observer</Typography>
        <Box className="isVisible" sx={{marginTop:'80vh'}}>{isVisible ? "In Viewport":"Not In Viewport"}</Box>

      </Box>
      <Box sx={{marginTop:'10vh', bgcolor:'success.light'}}>
        <div ref={containerRef}>
          observe me
        </div>
      </Box>
    </Container>
  </>
  );
}
