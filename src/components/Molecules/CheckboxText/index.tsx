import { Box } from "@mui/material"
import CheckBox from "../../Atoms/Checkbox"
import Typography from "../../Atoms/Typography"
import theme from "../../../theme/theme"
type CheckboxTextProps = {
    checked : boolean,
    text: string
}

const CheckboxText = (props: CheckboxTextProps) => {
  const {checked,text} = props
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
    color: theme.palette.text.secondary

  }

  return (
    <Box sx={{...myStyle}}>
      <CheckBox checked={checked}/>
      <Typography variant="body1" {...typoStyle}  >{text}</Typography>
      
    </Box>
  )
}

export default CheckboxText