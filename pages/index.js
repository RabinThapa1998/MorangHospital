import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { AppBar, Typography, Box, CssBaseline, Grid, Paper, Item, Card, CardContent, Divider, Avatar, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { styled, alpha } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { version } from 'react';


const useStyle = makeStyles({
  departmentcard: {
    height: 'auto',
    minWidth: '270px',
    transform: 'translateY(0)',
    transition: 'transform .5s ease, box-shadow .5s ease',

    "&:hover": {
      transform: 'translateY(-1px)',
      boxShadow: " rgba(100, 100, 111, 0.3) 0px 7px 29px 0px"
    }
  },
  heroswiperpaper: {
  }
})

const MainSwiperHover = styled('div')(({ theme }) => ({
  display: 'none',
  position: 'absolute',
  top: '200',
  '&:hover': {
    display: 'block'
  }
}));

export default function Home() {
  const classes = useStyle()
  return (
    <Box sx={{ margin: '10px' }} >
      <Grid container xs={12} sx={{ alignItems: 'stretch' }}>
        <Grid item sm={5} xs={12} >
          <Paper elevation={0} sx={{ m: 4, height: 'auto' }}>
            <Typography variant='h5' sx={{ fontWeight: '600', textAlign: 'start' }} color='text.secondary'>Welcome To</Typography>
            <Typography variant='h2' sx={{ fontWeight: '900', textAlign: 'start', fontSize: '60px' }} color='primary'>Morang <ins style={{ fontWeight: '900', textAlign: 'start', fontSize: '65px' }}>  Hospital</ins></Typography>
          </Paper>
          <Paper elevation={1} sx={{ m: 4, height: 'auto' }}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}

              // navigation
              pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // spaceBetween={10}
            // slidesPerView={1}
            autoplay={{delay: 1000}}
            loop= 'true'  
          
            // direction={'vertical'}
            >
              <SwiperSlide>
                <Box sx={{ height: '300px', p: 5 }}>
                  <Typography variant="h5" color='text.secondary'>Daily OPD Service</Typography>
                  <Typography variant="h4">By:</Typography>
                  <Stack direction='row' spacing={2} sx={{ mt: 2 }}>
                    <Avatar
                      alt="Rajiv Rizal"
                      // src="/images/umesh.jpg"
                      sx={{ width: 72, height: 72 }}
                    />
                    <Box>
                      <Typography variant="h3" sx={{ fontWeight: '700' }}>Dr.Rajiv Rizal</Typography>
                      <Typography variant='body1' sx={{ textAlign: 'left', color: 'text.secondary' }}>MBBS.MD</Typography>
                    </Box>
                  </Stack>

                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box sx={{ height: '300px', p: 5 }}>
                  <Typography variant="h5" color='text.secondary'>Daily Pediatric Service</Typography>
                  <Typography variant="h4">By:</Typography>
                  <Typography variant="h3">Dr.Sanjiv</Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box sx={{ height: '300px', p: 5 }}>
                  <Typography variant="h5" color='text.secondary'>Daily Bone Service</Typography>
                  <Typography variant="h4">By:</Typography>
                  <Typography variant="h3">Dr.Ravi</Typography>
                </Box>
              </SwiperSlide>

            </Swiper>
          </Paper>
        </Grid>
        <Grid item sm={7} xs={12}>
          <Paper elevation={1} sx={{ height: 'auto', m: 4 }} className={classes.heroswiperpaper}>

            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              spaceBetween={50}
              slidesPerView={1}

            >
              <SwiperSlide>
                <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: '700', color: 'primary.main', py: 0 }} >Premises</Typography>
                <Image src='/images/mh.jpeg' width='2048' height='1536' ></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: '700', color: 'primary.main', py: 0 }} >Parking</Typography>
                <Image src='/images/4.jpg' width='2048' height='1536' ></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: '700', color: 'primary.main', py: 0 }} >Premises</Typography>
                <Image src='/images/mh.jpeg' width='2048' height='1536' ></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: '700', color: 'primary.main', py: 0 }} >Premises</Typography>
                <Image src='/images/mh.jpeg' width='2048' height='1536' ></Image>
              </SwiperSlide>

            </Swiper>
          </Paper>
        </Grid>
      </Grid>


      <Box sx={{ flexGrow: '1', mt: 1 }}>
        <Typography variant="h4" sx={{ fontWeight: '700', color: 'text.secondary' }}>Our Health Specialist</Typography>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          // navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className={styles.departmentswiper}
        >

          <SwiperSlide>
            <Paper elevation={2} className={classes.departmentcard} sx={{ p: 2 }}>
              <Avatar
                alt="Umesh Guragain"
                src="/images/umesh.jpg"
                sx={{ width: 72, height: 72, margin: 'auto' }}
                variant="rounded"
              />
              <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: '500', color: 'text.secondary', pt: 2 }} >Emergency</Typography>
              <Typography variant='h5' sx={{ textAlign: 'center' }}>Dr.Umesh Guragain</Typography>
              <Typography variant='body1' sx={{ textAlign: 'center', color: 'text.secondary' }}>MBBS.MD</Typography>
            </Paper>
          </SwiperSlide>

          <SwiperSlide>
            <Paper elevation={2} className={classes.departmentcard} sx={{ p: 2 }}>
              <Avatar
                alt="Umesh Guragain"
                src="/images/umesh.jpg"
                sx={{ width: 64, height: 64, margin: 'auto' }}
              />
              <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: '500', color: 'text.secondary', pt: 3 }} >Emergency</Typography>
              <Typography variant='h5' sx={{ textAlign: 'center' }}>Dr.Umesh Guragain</Typography>
              <Typography variant='body1' sx={{ textAlign: 'center', color: 'text.secondary' }}>MBBS.MD</Typography>
            </Paper>
          </SwiperSlide>

          <SwiperSlide>
            <Paper elevation={2} className={classes.departmentcard} sx={{ p: 2 }}>
              <Avatar
                alt="Umesh Guragain"
                src="/images/umesh.jpg"
                sx={{ width: 64, height: 64, margin: 'auto' }}
              />
              <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: '500', color: 'text.secondary', pt: 3 }} >Emergency</Typography>
              <Typography variant='h5' sx={{ textAlign: 'center' }}>Dr.Umesh Guragain</Typography>
              <Typography variant='body1' sx={{ textAlign: 'center', color: 'text.secondary' }}>MBBS.MD</Typography>
            </Paper>
          </SwiperSlide>

          <SwiperSlide>
            <Paper elevation={2} className={classes.departmentcard} sx={{ p: 2 }}>
              <Avatar
                alt="Umesh Guragain"
                src="/images/umesh.jpg"
                sx={{ width: 64, height: 64, margin: 'auto' }}
              />
              <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: '500', color: 'text.secondary', pt: 3 }} >Emergency</Typography>
              <Typography variant='h5' sx={{ textAlign: 'center' }}>Dr.Umesh Guragain</Typography>
              <Typography variant='body1' sx={{ textAlign: 'center', color: 'text.secondary' }}>MBBS.MD</Typography>
            </Paper>
          </SwiperSlide>


        </Swiper>
      </Box>


      <Box sx={{ flexGrow: '1', mt: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: '700', color: 'text.secondary' }}>Our Services</Typography>
        <Stack className={styles.departmentswiper} spacing={2}>
          <Paper elevation={0} sx={{ p: 2}}>
            <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: '500', color: 'text.secondary', pt: 2 }} >Highly Equipped Lab</Typography>
            <Typography variant='h5' sx={{ textAlign: 'center' }}>We test all the basic body</Typography>
            <Typography variant='body1' sx={{ textAlign: 'center', color: 'text.secondary' }}>Blood Sugar</Typography>
            <Typography variant='body1' sx={{ textAlign: 'center', color: 'text.secondary' }}>Dengue..</Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2 }}>
            <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: '500', color: 'text.secondary', pt: 2 }} >Highly Equipped Lab</Typography>
            <Typography variant='h5' sx={{ textAlign: 'center' }}>Dr.Umesh Guragain</Typography>
            <Typography variant='body1' sx={{ textAlign: 'center', color: 'text.secondary' }}>MBBS.MD</Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2 }}>
            <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: '500', color: 'text.secondary', pt: 2 }} >Highly Equipped Lab</Typography>
            <Typography variant='h5' sx={{ textAlign: 'center' }}>Dr.Umesh Guragain</Typography>
            <Typography variant='body1' sx={{ textAlign: 'center', color: 'text.secondary' }}>MBBS.MD</Typography>
          </Paper>
        </Stack>

      </Box>
    </Box>
  )
}