import React from 'react'
import Typography from '../../Atoms/Typography'
import { TableCell,styled } from '@mui/material'
import theme from '../../../theme/theme'
export type MyTableHeadeProps = {
    leftAlign: boolean,
    text: string
}

const RightAlignedDiv = styled("div")({
    textAlign: "right",
    width: "150px"
});



const TableHeader = (props: MyTableHeadeProps) => {
  return (
    <TableCell align='left' sx={{backgroundColor: "#F7F8FA"}}>
        {!props.leftAlign && 
        (<RightAlignedDiv>
            <Typography variant='caption1' color={theme.palette.text.secondary}>
                {props.text}
                </Typography>
            </RightAlignedDiv>)}

{props.leftAlign && (<Typography variant='caption1' color={theme.palette.text.secondary}>{props.text}</Typography>)}
    </TableCell>
  );
};

export default TableHeader