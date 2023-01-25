import React from 'react'
import {Button} from '@mui/material';
import Typography from '../Typography';
import theme from '../../../theme/theme'

type Props = {
    label: string
    variant: 'primary' | 'hover' | 'secondary';
    icon?: string;
    onClick? : React.MouseEventHandler<HTMLButtonElement>; 
}

const ButtonElement = (props: Props) => {

  const selectBackgroundColor = (variant : string) => {
    if(variant === "primary") {
        return "#224DFF";
      }
    else if(variant === "secondary"){
        return "#FFFFFF"
    }
      
    return "#1132B7"
  }

  return (
    <Button
    onClick={props.onClick}
    style={{
        padding: "8px 16px",
        textTransform: "none",
        borderRadius: "6px",
        background:
        selectBackgroundColor(props.variant),
        border: props.variant === "secondary" ? "1px solid #E5E7ED" : "none",
        cursor: "pointer",
    }}>
        <Typography
        variant="body1"
        color={
          props.variant == "secondary"
           ? theme.palette.text.primary : theme.palette.text.disabled
        }
      >
        {props.label}
      </Typography>
    </Button>
  )
}

export default ButtonElement