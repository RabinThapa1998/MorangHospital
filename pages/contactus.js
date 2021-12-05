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
                    <Paper sx={{ height: '100%', width: '100%' }}>
                        <div style={{ height: '100%', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: 'AIzaSyDbzLhMcNYraDCT0Ys7i6di_9FTOIHhPA4' }}
                                defaultCenter={map.center}
                                defaultZoom={map.zoom}
                                yesIWantToUseGoogleMapApiInternals
                            >
                                <AnyReactComponent
                                    lat={26.65}
                                    lng={ 87.55}
                                    text="My Marker"
                                />
                            </GoogleMapReact>
                        </div>
                    </Paper>

                </Grid>
            </Grid>
        </Box>

    );
}

export default contactus;