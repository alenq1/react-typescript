import  Header  from "../layouts/Header";
import Footer from "../layouts/Footer";
import { appStyle } from "../theme/default";

import WrappedRoutes from "../config/routes/routes";

function App() {

  return (    
      
          <div className={''}>        
              <Header/>
                <WrappedRoutes/>
              <Footer/>                
          </div>
      
  );
}

export default App;
