
import '../styles/globals.css'
import Layout from '../comps/Layout'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from 'next/head'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Oswald', 'sans-serif'
    ].join(','),
  },});

function MyApp({ Component, pageProps }) {
  return (
    <>
    

    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </>
  )
}

export default MyApp
