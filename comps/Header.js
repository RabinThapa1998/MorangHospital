import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import CssBaseline from '@mui/material/CssBaseline';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function HideOnScroll(props) {

    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const LinkWrapper = styled('div')(({ theme }) => ({
    color: theme.palette.common.white,
    borderBottom: '4px solid transparent',
    transition: 'color .5s ease, borderBottom .5s ease',
    '&:hover': {
        color: 'black',
        cursor: 'pointer',
        borderBottom: '4px solid blue',
    }
}));

function Header(props) {

    const [isMenuOpen, setmenu] = useState('false');

    return (

        <>
            <CssBaseline />
            <HideOnScroll {...props}>
                    <AppBar>
                        <Toolbar sx={{ justifyContent: 'space-between', minHeight: '36px',background:'#f6f6f6', color:'black'}} variant='dense'>
                            <Typography>24 Hr Emergency & Ambulance service:-021555343</Typography>
                            <Typography>Get Directions</Typography>
                        </Toolbar>
                        <Toolbar>
                            <Typography variant='h3' component='div'>MH</Typography>
                            <Box sx={{ flexGrow: '1' }} />
                            <Link href='/'>
                                <LinkWrapper>
                                    <a><Typography variant='h6' component='div' sx={{ m: 2 }}>Home</Typography></a>
                                </LinkWrapper>
                            </Link>


                            <Link href='/reports'>
                                <LinkWrapper>
                                    <a><Typography variant='h6' component='div' sx={{ m: 2 }}>Reports</Typography></a>
                                </LinkWrapper>
                            </Link>
                            <Link href='/contactus'>
                                <LinkWrapper>
                                    <a><Typography variant='h6' component='div' sx={{ m: 2 }}>Contact</Typography></a>
                                </LinkWrapper>
                            </Link>
                        </Toolbar>
                    </AppBar>
    
            </HideOnScroll>
        </>

    );
}

export default Header;
