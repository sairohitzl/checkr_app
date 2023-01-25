import { TypographyProps } from '@mui/material'
import {Typography as MuiTypography } from '@mui/material'


interface Props extends TypographyProps{
    children?:string
}

const Typography = (props: Props) => {
    const {children,variant,align,color,gutterBottom, ...rest} = props;
  return (
    <MuiTypography 
    variant={variant}
    align={align}
    color={color}
    {...rest}
    >
     {children}   
    </MuiTypography>
  )
}

export default Typography