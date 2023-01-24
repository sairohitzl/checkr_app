import React from 'react'
import { Typography, TypographyProps } from '@mui/material'


interface Props extends TypographyProps{
    children?:string
}

const TypographyElement = (props: Props) => {
    const {children,variant,align,color,gutterBottom, ...rest} = props;
  return (
    <Typography 
    variant={variant}
    align={align}
    color={color}
    {...rest}
    >
     {children}   
    </Typography>
  )
}

export default TypographyElement