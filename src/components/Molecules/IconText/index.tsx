import React from 'react'
import { Box } from '@mui/material'
import MyIcon from '../../Atoms/MyIcon'
import Typography from '../../Atoms/Typography'
type Props = {
    icon: string
    title: string
    active?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const IconText = ({icon,title,active,onClick}: Props) => {
  return (
    <Box onClick={()=> onClick} 
      style={{
        padding: "12px",
        background: active? "#EFF2FF" : "#FFFFFF",
        borderRadius: "6px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
      }}>
    <MyIcon  icon={icon} colour="#224DFF" ></MyIcon>{" "}
    <span
    style={{
        color: active ? "blue" : "#2C2C2E",
        paddingLeft: "10px",
      }} >
        <Typography variant='body1'>{title}</Typography>
      </span>
    </Box>
  )
}

export default IconText