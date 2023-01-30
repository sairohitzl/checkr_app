import React from 'react'
import {Button} from '@mui/material';
import Typography from '../Typography';
import theme from '../../../theme/theme'

export type ButtonProps = {
    label: string
    variant: 'primary' | 'hover' | 'secondary';
    icon?: string;
    onClick? : React.MouseEventHandler<HTMLButtonElement>; 
}

const ButtonElement = (props: ButtonProps) => {

  const selectBackgroundColor = (variant : string) => {
    if(variant === "primary") {
        return theme.palette.primary['500'];
      }
    else if(variant === "secondary"){
        return theme.palette.text.disabled;
    }
      
    return theme.palette.primary['600'];
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