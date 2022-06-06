import { Box} from '@mui/system';
import {StyledMain} from './style';
import Card from "../../components/Card";


const Main = ({children}: any) => {

  return (

  <Box sx={StyledMain} >    
    {children}
  </Box>

  )
};

export default Main;
