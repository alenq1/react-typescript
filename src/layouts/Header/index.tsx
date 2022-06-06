import { Box} from '@mui/system';
import {StyledHeader} from './style';
import Logo from "../../components/Logo"; 
import Menu from "../../components/Menu"; 
import Button from "../../components/Button"; 


const Header = () => {
  
  return( 
  <Box sx={StyledHeader}>
    <Logo/>
    <Menu/>
    <Button text={"click"}/>    
  </Box>
  )
  
};

export default Header;
