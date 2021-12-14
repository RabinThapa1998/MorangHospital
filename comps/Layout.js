import Header from "./Header";
import Footer from "./Footer";
import { CssBaseline } from "@mui/material";

const Layout = ({children}) => {
    return ( 
       <>
       <CssBaseline />
        <Header/>
        <div style={{marginTop:'100px'}}>
        {children}
        </div>
        <Footer/>
        </>
 
     );
}
 
export default Layout;