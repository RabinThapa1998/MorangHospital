import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { AppBar, Typography, Box, CssBaseline, Grid, Paper, Item, Card, CardContent, Divider, Avatar, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade, EffectCards } from 'swiper';
import { styled, alpha } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { useRef, useState, useEffect } from 'react';
import { Precare, Customercare, Xray ,Lab} from '../comps/svgs';
import { boxSizing } from '@mui/system';


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
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(true)
  const healthContainerRef = useRef(null)
  const options = {
    threshold: 1
  }
  console.log("outside isloaded", isLoaded)

  useEffect(() => {
    if (isLoaded) {
      setIsLoaded(false);
      console.log('inside isloaded', isLoaded)
      const boxobserver = new IntersectionObserver(
        function (entries, boxobserver) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // console.log(entry.isIntersecting)
              setIsVisible(true);
              boxobserver.unobserve(entry.target);
            }
            else {
              setIsVisible(false)
            }
          })
        }, options)
      if (healthContainerRef.current) { boxobserver.observe(healthContainerRef.current) }
    }
    return () => {

      // if(healthContainerRef.current)
      // boxobserver.unobserve(healthContainerRef.current)
    }
  }, [healthContainerRef])


  return (
    <Box sx={{ margin: '0px', overflowX: 'hidden' }}>
      <Box className={styles.homebg} sx={{ px: 3, pt: 2 }}>

        <Paper elevation={0} sx={{ p: 0, height: 'auto', background: 'transparent' }}>
          <Typography variant='h3' sx={{ fontWeight: '600', textAlign: 'center' }} color='text.secondary'>Welcome To</Typography>
          <Typography variant='h2' sx={{ fontWeight: '900', fontSize: '80px', textAlign: 'center', textDecoration: 'underline' }} color='text.primary'>Morang Hospital</Typography>
          <Typography variant='h5' sx={{ fontWeight: '900', textAlign: 'center', textDecoration: 'underline' }} color='text.primary'>Since 2007</Typography>
        </Paper>

        <Paper elevation={0} sx={{ mt: 13, pb: 5, height: 'auto', background: 'transparent' }}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            spaceBetween={30}
            // slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop='true'
            effect={'fade'}
            fadeEffect={
              { crossFade: true }
            }
          >
            <SwiperSlide>
              <Box sx={{ height: 'auto', p: 0 }}>
                <Typography variant="h5" color='text.secondary'>Daily Physician Service</Typography>
                <Typography variant="h4">By:</Typography>
                <Stack direction='row' spacing={2} sx={{ mt: 2 }}>
                  <Avatar
                    alt="Umesh Guragain"
                    // src="/images/umesh.jpg"
                    sx={{ width: 72, height: 72 }}
                  />
                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: '700', color: 'common.white' }} >Dr.Umesh Guragain</Typography>
                    <Typography variant='body1' sx={{ textAlign: 'left', color: 'common.white' }}>MBBS.MD</Typography>
                    <Typography variant='body1' sx={{ textAlign: 'left', color: 'common.white' }}>Senior Physician and MD in Internal Medicine</Typography>
                  </Box>
                </Stack>

              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box sx={{ height: 'auto', p: 0 }}>
                <Typography variant="h5" color='text.secondary'>Daily Orthopedic service</Typography>
                <Typography variant="h4">By:</Typography>
                <Stack direction='row' spacing={2} sx={{ mt: 2 }}>
                  <Avatar
                    alt="Ravi kumar Shah"
                    // src="/images/umesh.jpg"
                    sx={{ width: 72, height: 72 }}
                  />
                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: '700', color: 'common.white' }} >Dr.Ravi Kumar Shah</Typography>
                    <Typography variant='body1' sx={{ textAlign: 'left', color: 'common.white' }}>MBBS.MS</Typography>
                    <Typography variant='body1' sx={{ textAlign: 'left', color: 'common.white' }}>Orthopedic and Trauma Surgeon</Typography>
                  </Box>
                </Stack>

              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <Box sx={{ height: 'auto', p: 0 }}>
                <Typography variant="h5" color='text.secondary'>Daily Pediatric Service</Typography>
                <Typography variant="h4">By:</Typography>
                <Stack direction='row' spacing={2} sx={{ mt: 2 }}>
                  <Avatar
                    alt="Sunil Adhikari"
                    // src="/images/umesh.jpg"
                    sx={{ width: 72, height: 72 }}
                  />
                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: '700', color: 'common.white' }} >Dr.Sunil Adhikari</Typography>
                    <Typography variant='body1' sx={{ textAlign: 'left', color: 'common.white' }}>MBBS.MD</Typography>
                    <Typography variant='body1' sx={{ textAlign: 'left', color: 'common.white' }}>Pediatrician</Typography>
                  </Box>
                </Stack>

              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <Box sx={{ height: 'auto', p: 0 }}>
                <Typography variant="h5" color='text.secondary'>Daily Gynae and OBS Service</Typography>
                <Typography variant="h4">By:</Typography>
                <Stack direction='row' spacing={2} sx={{ mt: 2 }}>
                  <Avatar
                    alt="Mamata Pandey"
                    // src="/images/umesh.jpg"
                    sx={{ width: 72, height: 72 }}
                  />
                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: '700', color: 'common.white' }} >Dr.Mamata Pandey</Typography>
                    <Typography variant='body1' sx={{ textAlign: 'left', color: 'common.white' }}>MBBS.MD</Typography>
                    <Typography variant='body1' sx={{ textAlign: 'left', color: 'common.white' }}>Gynae and OBS</Typography>
                  </Box>
                </Stack>

              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box sx={{ height: 'auto', p: 0 }}>
                <Typography variant="h5" color='text.secondary'>Daily USG Service</Typography>
                <Typography variant="h4">By:</Typography>
                <Stack direction='row' spacing={2} sx={{ mt: 2 }}>
                  <Avatar
                    alt="Rajiv Rizal"
                    // src="/images/umesh.jpg"
                    sx={{ width: 72, height: 72 }}
                  />
                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: '700', color: 'common.white' }} >Dr.Rajiv Rizal</Typography>
                    <Typography variant='body1' sx={{ textAlign: 'left', color: 'common.white' }}>MBBS.MD</Typography>
                    <Typography variant='body1' sx={{ textAlign: 'left', color: 'common.white' }}>Radiologist</Typography>
                  </Box>
                </Stack>

              </Box>
            </SwiperSlide>

          </Swiper>
        </Paper>

        {/* <Grid item sm={7} xs={12}> */}
        {/* <Paper elevation={1} sx={{ height: 'auto', mx: 3 }} className={classes.heroswiperpaper}>

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
                <Image src='/images/mh.jpeg' width='2048' height='1536' alt='img'></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: '700', color: 'primary.main', py: 0 }} >Parking</Typography>
                <Image src='/images/4.jpg' width='2048' height='1536' alt='img' ></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: '700', color: 'primary.main', py: 0 }} >Premises</Typography>
                <Image src='/images/mh.jpeg' width='2048' height='1536' alt='img'></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: '700', color: 'primary.main', py: 0 }} >Premises</Typography>
                <Image src='/images/mh.jpeg' width='2048' height='1536' alt='img'></Image>
              </SwiperSlide>

            </Swiper>
          </Paper> */}
        {/* </Grid> */}

      </Box>

      <div ref={healthContainerRef} className={isVisible ? 'appear' : 'box'}>
        <Box sx={{ flexGrow: '1', mt: 1, px: 4 }} >
          <Typography variant="h4" sx={{ fontWeight: '700', color: 'primary.main', textAlign: 'center' }}>Our Health Specialist</Typography>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className={styles.departmentswiper}
            breakpoints={
              { // when window width is >= 320px
                425: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                650: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },

                // when window width is >= 640px
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40
                }
              }
            }
          >

            <SwiperSlide>
              <Paper elevation={0} className={classes.departmentcard} sx={{ p: 2 }}>
                <Avatar
                  alt="Umesh Guragain"
                  src="/images/umesh.jpg"
                  sx={{ width: 72, height: 72, margin: 'auto' }}
                  variant="rounded"
                />
                <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: '500', color: 'text.secondary', pt: 2 }} >Emergency</Typography>
                <Typography variant='h5' sx={{ textAlign: 'center' }}>Dr.Umesh Guragain</Typography>
                <Typography variant='body1' sx={{ textAlign: 'center', color: 'text.secondary' }}>MBBS.MD</Typography>
                <Typography variant='body1' sx={{ textAlign: 'center', color: 'text.disabled' }}>Senior Physician</Typography>
              </Paper>
            </SwiperSlide>
            <SwiperSlide>
              <Paper elevation={0} className={classes.departmentcard} sx={{ p: 2 }}>
                <Avatar
                  alt="DB Thapa"
                  src="/images/dbthapa.jpg"
                  sx={{ width: 72, height: 72, margin: 'auto' }}
                  variant="rounded"
                />
                <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: '500', color: 'text.secondary', pt: 2 }} >OPD</Typography>
                <Typography variant='h5' sx={{ textAlign: 'center' }}>DB thapa</Typography>
                <Typography variant='body1' sx={{ textAlign: 'center', color: 'text.secondary' }}>General Medicine</Typography>
                <Typography variant='body1' sx={{ textAlign: 'center', color: 'text.disabled' }}>Health Assistant</Typography>
              </Paper>
            </SwiperSlide>
            <SwiperSlide>
              <Paper elevation={0} className={classes.departmentcard} sx={{ p: 2 }}>
                <Avatar
                  alt="DB Thapa"
                  src="/images/dkesh.jpg"
                  sx={{ width: 72, height: 72, margin: 'auto' }}
                  variant="rounded"
                />
                <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: '500', color: 'text.secondary', pt: 2 }} >OPD</Typography>
                <Typography variant='h5' sx={{ textAlign: 'center' }}>Dikesh Dhungana</Typography>
                <Typography variant='body1' sx={{ textAlign: 'center', color: 'text.secondary' }}>General Medicine</Typography>
                <Typography variant='body1' sx={{ textAlign: 'center', color: 'text.disabled' }}>Health Assistant</Typography>
              </Paper>
            </SwiperSlide>
            <SwiperSlide>
              <Paper elevation={0} className={classes.departmentcard} sx={{ p: 2 }}>
                <Avatar
                  alt="DB Thapa"
                  src="/images/ganesh.jpg"
                  sx={{ width: 72, height: 72, margin: 'auto' }}
                  variant="rounded"
                />
                <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: '500', color: 'text.secondary', pt: 2 }} >OPD</Typography>
                <Typography variant='h5' sx={{ textAlign: 'center' }}>Ganesh Neupane</Typography>
                <Typography variant='body1' sx={{ textAlign: 'center', color: 'text.secondary' }}>General Medicine</Typography>
                <Typography variant='body1' sx={{ textAlign: 'center', color: 'text.disabled' }}>Health Assistant</Typography>
              </Paper>
            </SwiperSlide>
          </Swiper>
        </Box>
      </div>


      <Box sx={{ flexGrow: '1', mt: 5, px: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: '700', color: 'primary.main', textAlign: 'center'}}>Our Services</Typography>
        <Stack direction={{ xs: 'column', md: 'row' }}  justifyContent="space-around" alignItems="center" sx={{mt:3}}>
          <Box sx={{pb:2}}>
            <Precare />
            <Typography variant={'h5'} sx={{ fontWeight: '700',textAlign:'center' }}>Pre Emergency Care</Typography>
          </Box>
          <Box sx={{pb:2}}>
            <Xray />
            <Typography variant={'h5'} sx={{ fontWeight: '700',textAlign:'center' }}>Radiology</Typography>
          </Box>
          <Box sx={{pb:2}}>
            <Customercare  />
            <Typography variant={'h5'} sx={{ fontWeight: '700',textAlign:'center' }}>Customer Care</Typography>
          </Box>
          <Box sx={{pb:2}}>
            <Lab />
            <Typography variant={'h5'} sx={{ fontWeight: '700',textAlign:'center' }}>Lab</Typography>
          </Box>
        </Stack>
      </Box>

      <Box sx={{ flexGrow: '1', mt: 5, p: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: '700', color: 'primary.main', textAlign: 'center' }}>Gallery</Typography>
        <Grid container sx={{ p: 2 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h2' color='text.secondary'>We Share Our Joy.</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vitae similique! Quaerat, optio? Exercitationem consequatur aut odit nulla. Fugiat iste iure veniam doloribus distinctio vero cumque ullam. Corporis, earum ipsum.</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ overflow: 'hidden' }}>
              <Swiper
                modules={[EffectCards]}
                effect='cards'
                grabCursor={true}
                className={styles.gallery}
              >
                <SwiperSlide className={styles.galleryslides}>
                  <Image src='/images/G1.jpeg' width='2048' height="1536" alt='img'></Image>
                </SwiperSlide>
                <SwiperSlide className={styles.galleryslides}>
                  <Image src='/images/G3.jpg' height='4032' width="3024" alt='img'></Image>
                </SwiperSlide>
                <SwiperSlide className={styles.galleryslides}>
                  <Image src='/images/G7.jpg' width='4032' height="3024" alt='img'></Image>
                </SwiperSlide>
                <SwiperSlide className={styles.galleryslides}>
                  <Image src='/images/G6.jpg' height='4032' width="3024" alt='img'></Image>
                </SwiperSlide>
                <SwiperSlide className={styles.galleryslides}>
                  <Image src='/images/G4.jpg' width='3024' height="4032" alt='img'></Image>
                </SwiperSlide>
                <SwiperSlide className={styles.galleryslides}>
                  <Image src='/images/G2.jpeg' height='2048' width="1536" alt='img'></Image>
                </SwiperSlide>
                <SwiperSlide className={styles.galleryslides}>
                  <Image src='/images/G8.jpg' width='4032' height="3024" alt='img'></Image>
                </SwiperSlide>
                <SwiperSlide className={styles.galleryslides}>
                  <Image src='/images/G5.jpg' width='4032' height="3024" alt='img'></Image>
                </SwiperSlide>
              </Swiper>

            </Box>
          </Grid>
        </Grid>

      </Box>
    </Box>
  )
}