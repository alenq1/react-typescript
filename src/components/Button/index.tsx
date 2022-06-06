import Button from '@mui/material/Button';
import {styledButton} from "./style"

const ButtonApp = (props: any) => {

  
  return (
    <Button 
      sx={styledButton}
      variant="contained" 
      onClick={props.action}
    >
      {props.text}
    </Button>
    )
};

export default ButtonApp;
