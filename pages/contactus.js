import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { Typography, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const contactus = () => {
const map = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
    return (

        <Box sx={{ p: 2 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { my: 1, width: '100%' },
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            noValidate
                            autoComplete="off"

                        >
                            <div>
                                <TextField id="outlined-basic" label="Name" variant="outlined" />
                                <TextField id="outlined-basic" label="Email" variant="outlined" />
                            </div>
                            <div>

                                <TextField id="outlined-basic" label="Phone" variant="outlined" />
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                />
                            </div>
                            <div >
                                <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
                            </div>

                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box elevation='0' sx={{ height: '100%', width: '100%', p:0 ,m:0 }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.696780162873!2d87.5576269309502!3d26.658189248003456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e589eaa84d9487%3A0xc4b77d18a1c6e99d!2sMorang%20Hospital!5e0!3m2!1sen!2snp!4v1639119911773!5m2!1sen!2snp" 
                    width="600" height="450"  loading="lazy" ></iframe>
                    </Box>

                </Grid>
            </Grid>
        </Box>

    );
}

export default contactus;