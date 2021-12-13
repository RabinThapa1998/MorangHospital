import { Container, Typography, Grid, Box } from "@mui/material";
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
const Footer = () => {
    return (
        <Box sx={{ backgroundColor:'primary.main', minHeight:'200px',py:5}}>
        <Container maxWidth="lg">
                <Grid container >
                    <Grid item xs={12} sm={6} color='white' >
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', my: 1 }}>
                            <ContactPhoneRoundedIcon sx={{ mr: 2, fontSize: '30px' }} color='text.white'></ContactPhoneRoundedIcon>
                            <Typography variant='h6' component='span' color='white'>Contact Details</Typography>
                        </Box>
                        <Typography variant='body1' component='p' sx={{ ml: 6, }}>021-555343</Typography>
                        <Typography variant='body1' component='p' sx={{ ml: 6 }}>9862045258</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} color='white' >
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', my: 1 }}>
                            <AddLocationRoundedIcon sx={{ mr: 2, fontSize: '30px' }} color='text.white'></AddLocationRoundedIcon>
                            <Typography variant='h6' component='span' >Location Details</Typography>
                        </Box>
                        <Typography variant='body1' component='p' sx={{ ml: 6, }}>PathariSanishchare-1,</Typography>
                        <Typography variant='body1' component='p' sx={{ ml: 6, }}>Morang</Typography>
                        <Typography variant='body1' component='p' sx={{ ml: 6, }}>Sunakhari Tole</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} color='white' >
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', my: 1 }}>
                            <FacebookRoundedIcon sx={{ mr: 2, fontSize: '30px' }} color='text.white'></FacebookRoundedIcon>
                            <Typography variant='h6' component='span' sx={{fontWeight:'700'}} >Social Media</Typography>
                        </Box>
                        <a href="https://www.facebook.com/moranghospitalpvtltd" target="_blank"  >
                        <Typography variant='body1' component='p' sx={{ ml: 6,color:'white' }}>FaceBook</Typography>
                        </a>
                    </Grid>
                </Grid>
                </Container>
        </Box>
    )
}

export default Footer;