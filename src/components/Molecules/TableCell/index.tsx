import CustomTag from '../CustomTag';
import Typography from '../../Atoms/Typography';
import {styled,TableCell} from '@mui/material'
import theme from '../../../theme/theme';

export type MyCellProps = {
 
    variant : "text" | "interactivetext" | "date" | "status" ,
    text: string,
    statustype?: 'green' | 'yellow' | 'green',
    onClick?: ()=>void,
    itemId?: number;


}

const RightAlignedDiv = styled("div")({
    textAlign: "right",
    width: "150px",
  });

const CustomTableCell = (props: MyCellProps) => {
    const {variant,text,statustype,onClick,itemId} = props
    const myStyle = {
        backgroundColor: theme.palette.text.disabled,
      };

      switch(variant){
        case 'interactivetext':
            return (
                <TableCell
                    align='left'
                    sx={{ ...myStyle, cursor: "pointer" }}>
                        <Typography 
                        variant="body2"
                        color={theme.palette.primary["500"]}
                    >
                        {text}
                        </Typography>
                </TableCell>
            );
        
        case 'text':
            return (
                <TableCell align="left" sx={myStyle}>
                    <Typography variant="body2" color={theme.palette.text.primary}>
                        {text}
                    </Typography>
                </TableCell>
            );
        
        case 'date':
            return (
                <TableCell align='left' sx={myStyle}>
                    <RightAlignedDiv>
                    <Typography variant="body2" color={theme.palette.text.primary}>
                        {text}
                    </Typography>
                    </RightAlignedDiv>
                </TableCell>
            );
        case 'status':
            return (
                <TableCell align="left" sx={myStyle}>
                    <CustomTag title={text} type={statustype!} />
                </TableCell>
            );
        
        default:
            return (
            <TableCell align='left'>
                <Typography variant='body2' color={theme.palette.text.primary}>
                        {text}
                </Typography>
            </TableCell>
            );
      }
}

export default CustomTableCell