import React from 'react'
import Typography from '../../Atoms/Typography'
import { TableCell,styled } from '@mui/material'
import theme from '../../../theme/theme'

export type MyTableHeaderProps = {
    leftAlign: boolean,
    text: string
}

const RightAlignedDiv = styled("div")({
    textAlign: "right",
    width: "150px"
});



const TableHeader = (props: MyTableHeaderProps) => {
    const {leftAlign,text} = props
  return (
    <TableCell align='left' sx={{backgroundColor: "#F7F8FA"}}>
        {!leftAlign && 
        (<RightAlignedDiv>
            <Typography variant='caption1' color={theme.palette.text.secondary}>
                {text}
                </Typography>
            </RightAlignedDiv>)}

{leftAlign && (<Typography variant='caption1' color={theme.palette.text.secondary}>{text}</Typography>)}
    </TableCell>
  );
};

export default TableHeader