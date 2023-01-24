import React from 'react'
import {Button} from '@mui/material';
import TypographyElement from '../Typography';
import theme from '../../../theme/theme'

type Props = {
    label: string
    variant: 'primary' | 'hover' | 'secondary';
    icon?: string;
    onClick? : React.MouseEventHandler<HTMLButtonElement>; 
}

const ButtonElement = (props: Props) => {
  return (
    <Button
    onClick={props.onClick}
    style={{
        padding: "8px 16px",
        textTransform: "none",
        borderRadius: "6px",
        background:
          props.variant === "primary"
            ? "#224DFF"
            : props.variant === "secondary"
            ? "#FFFFFF"
            : "#1132B7",
        border: props.variant === "secondary" ? "1px solid #E5E7ED" : "none",
        cursor: "pointer",
    }}>
        <TypographyElement
        variant="body1"
        color={
          props.variant == "secondary"
            ? theme.palette.text.primary
            : theme.palette.text.disabled
        }
      >
        {props.label}
      </TypographyElement>


    </Button>
  )
}

export default ButtonElement