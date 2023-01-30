import React from 'react'
import { Box } from '@mui/material'
import Typography from '../../Atoms/Typography'
import IconButton from '../IconButton'
import theme from '../../../theme/theme'
type Props = {
    title:string,
    icon?:string,
    handleClick? : ()=> void
}

const InfoLabel = (props: Props) => {
  const {title,icon,handleClick} = props
  return (
    <Box 
    sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: theme.palette.text.disabled,
        padding: "16px",
        borderRadius: "8px",
        alignItems: "center",
        borderBottom: "1px solid #E5E7ED",
    }}
    >
        <Typography variant='subtitle1' >{title}</Typography>
        { icon && (<IconButton icon={icon} variant="secondary" onClick={handleClick}></IconButton>)}

    </Box>
  )
}

export default InfoLabel