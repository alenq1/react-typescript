import {Button} from '@chakra-ui/react';
import {styledButton} from "./style"

const ButtonApp = (props: any) => {

  
  return (
    <Button      
      onClick={props.action}
    >
      {props.text}
    </Button>
    )
};

export default ButtonApp;
