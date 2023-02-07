import { Box } from "@mui/material"
import CheckBox from "../../Atoms/Checkbox"
import Typography from "../../Atoms/Typography"
import theme from "../../../theme/theme"
import { SyntheticEvent } from "react"
type CheckboxTextProps = {
    checked? : boolean,
    text: string
    onClick?: ()=>void
    onChange?: ()=>void
    variant: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | "caption1" | "caption2" | undefined
}

const CheckboxText = (props: CheckboxTextProps) => {
  const {checked,text,variant,onClick,onChange} = props
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
      <CheckBox checked={checked} onClick={onClick} />
      <Typography variant={variant} {...typoStyle}  >{text}</Typography>
      
    </Box>
  )
}

export default CheckboxText