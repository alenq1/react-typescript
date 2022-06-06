import  Header  from "../layouts/Header";
import Footer from "../layouts/Footer";
import CssBaseline from '@mui/material/CssBaseline';
import { appStyle } from "../theme/default";
import Box from '@mui/material/Box';
import WrappedRoutes from "../config/routes/routes";

function App() {

  return (    
      <CssBaseline>        
          <Box sx={appStyle}>        
              <Header/>
                <WrappedRoutes/>
              <Footer/>                
          </Box>
      </CssBaseline>    
  );
}

export default App;
