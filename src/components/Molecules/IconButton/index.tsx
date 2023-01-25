import React from 'react'
import { Button } from '@mui/material'
import MyIcon from '../../Atoms/MyIcon'
type Props = {
    icon : string
    variant : "primary" | "secondary" | "hover"
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton = (props: Props) => {

  const selectBackgroundColor = (variant:string) => {

    if(variant === "primary"){
      return "#224DFF"
    }
    else if(variant === "secondary"){
      return "#FFFFFF"
    }
    return "#1132B7"
  }

  return (
    <Button onClick={props.onClick} style={{
        textTransform: 'none',
        background: 
            selectBackgroundColor(props.variant),
         }}>
            <MyIcon icon={props.icon} colour={props.variant == "secondary" ? "#696A6E": "#FFFFFF" } />
         </Button>
  );
};

export default IconButton