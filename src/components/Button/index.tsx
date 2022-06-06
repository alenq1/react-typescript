import {styledButton} from "./style"

const ButtonApp = (props: any) => {

  
  return (
    <button 
      className={''}
      onClick={props.action}
    >
      {props.text}
    </button>
    )
};

export default ButtonApp;
