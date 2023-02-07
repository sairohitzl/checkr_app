import React from 'react'
import { Box } from '@mui/material'
import MyIcon from '../../Atoms/MyIcon'
import Typography from '../../Atoms/Typography'
import theme from '../../../theme/theme'

export type IconTextProps = {
    icon: string
    title: string
    active?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const IconText = (props: IconTextProps) => {
  const {icon,title,active=false,onClick} = props
  return (
    <Box onClick={()=>onClick}
      style={{
        padding: "12px",
        background: active? theme.palette.primary['200'] : theme.palette.text.disabled,
        borderRadius: "6px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
      }}>
    <MyIcon  icon={icon} colour={theme.palette.primary['500']} ></MyIcon>
    <span
    style={{
        color: active ? theme.palette.accent.blue : theme.palette.text.primary,
        paddingLeft: "10px",
      }} >
        <Typography variant='body1'>{title}</Typography>
      </span>
    </Box>
  )
}

export default IconText