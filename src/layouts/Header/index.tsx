
import {StyledHeader} from './style';
import Logo from "../../components/Logo"; 
import Menu from "../../components/Menu"; 
import Button from "../../components/Button"; 


const Header = () => {
  
  return( 
  <div className={''}>
    <Logo/>
    <Menu/>
    <Button text={"click"}/>    
  </div>
  )
  
};

export default Header;
