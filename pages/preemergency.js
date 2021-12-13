import { Typography,Box ,Paper, Stack ,Container} from "@mui/material";
import Link from 'next/link'
const Premergency = () => {
    return ( 
        <>
          <Container maxwidth='lg' sx={{height:'100vh'}}>
            <Typography variant="h4" sx={{fontWeight:'700'}} >Pre Emergency care</Typography>
            
            <Stack direction='column' sx={{position:'fixed', top:'50%', right:'0', backgroundColor:'primary.light'}} >
                <Box sx={{}}>
                <Link href='./preemergency'>
                <a style={{color:'white'}}>
                    <Typography variant='body1'>Pre emergency</Typography>
                </a>
                </Link>
                </Box>
                <Box>
                <Link href='./radiology'>
                <a>
                    <Typography variant='body1'>Radiology</Typography>
                </a>
                </Link>
                </Box>
                <Box>
                <Link href='./customercare'>
                <a>
                    <Typography variant='body1'>Customercare</Typography>
                </a>
                </Link>
                </Box>
                <Box>
                <Link href='./lab'>
                <a>
                    <Typography variant='body1'>lab</Typography>
                </a>
                </Link>
                </Box>
            </Stack>

          </Container>

        </>
     );
}

export default Premergency