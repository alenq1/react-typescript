import  Header  from "../layouts/Header";
import Footer from "../layouts/Footer";
import { appStyle } from "../theme/default";
import {Box} from '@chakra-ui/react';
import WrappedRoutes from "../config/routes/routes";

function App() {

  return (    
          <Box sx={appStyle}>        
              <Header/>
                <WrappedRoutes/>
              <Footer/>                
          </Box>
  );
}

export default App;
