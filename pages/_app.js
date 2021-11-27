
import '../styles/globals.css'
import Layout from '../comps/Layout'
import { ThemeProvider } from '@mui/styles'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  )
}

export default MyApp
