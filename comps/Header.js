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
import NavigationIcon from '@mui/icons-material/Navigation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

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
        color: '#ddd',
        cursor: 'pointer',
        borderBottom: '4px solid #ddd',
    }
}));

function Header(props) {

    const [isMenuOpen, setmenu] = useState('false');

    return (

        <>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar sx={{ justifyContent: 'space-between', minHeight: '36px', background: '#eee', color: 'black' }} variant='dense'>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <LocalPhoneIcon color='primary'/>
                        <Typography variant='body2' sx={{ fontWeight: '700' ,pl:2}} color="primary">24 Hr Emergency & Ambulance service:-021555343</Typography>
                        </Box>
                        
                        <a href="https://goo.gl/maps/CZdJrsQqwgZdxJhb6" target='_blank' >
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography color={'primary.main'} variant='body2' sx={{ fontWeight: '700' }} className='fontcolorhover' >Get Directions</Typography>
                                <NavigationIcon color='primary' />
                            </Box>
                        </a>
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
