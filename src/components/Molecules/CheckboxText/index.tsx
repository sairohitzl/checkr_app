import { Box } from "@mui/material"
import CheckBox from "../../Atoms/Checkbox"
import Typography from "../../Atoms/Typography"
type Props = {
    checked : boolean,
    text: string
}

const CheckboxText = (props: Props) => {

  const myStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap:"8px",
    position: "relative",
    width: "588px",
    height: "24px"

  }
  const typoStyle = {
    width: "556px",
    height: "24px",
    fontStyle: 'normal',
    fontSize: "14px",
    lineHeight: "20px",
    display: "flex",
    alignItems:'center',
    color: '#696A6E'

  }

  return (
    <Box sx={{...myStyle}}>
      <CheckBox checked={props.checked}/>
      <Typography variant="body1" {...typoStyle}  >{props.text}</Typography>
      
    </Box>
  )
}

export default CheckboxText