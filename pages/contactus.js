import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { Typography ,Button} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const contactus = () => {
    return (

        <Box sx={{p:2}}>
        <Grid container  spacing={3}>
            <Grid item xs={12} sm={6}>
                <Paper>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { my:1, width: '100%' },
                      p: 2,
                        display:'flex',
                        flexDirection:'column'
                    }}
                    noValidate
                    autoComplete="off"

                >
                <div>
                <TextField id="outlined-basic" label="Name" variant="outlined"  />
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
            <Paper sx={{height:'100%', width:'100%'}}>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptates quasi enim pariatur molestias natus saepe qui beatae quos, labore laboriosam ipsa aut illo atque optio provident! Libero commodi soluta facilis voluptas.</Typography>
            </Paper>
                
            </Grid>
        </Grid>
        </Box>

    );
}

export default contactus;