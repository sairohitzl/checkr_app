import { Button } from "@mui/material"
import theme from "../../../theme/theme";
import MyIcon from "../../Atoms/MyIcon"
import Typography from "../../Atoms/Typography"


type Props = {
    icon:string,
    label:string,
    variant: "primary" | "secondary" | "hover";
    onClick?: React.MouseEventHandler<HTMLButtonElement>

}

const IconTextButton = ({...props}: Props) => {

  const selectBackgroundColor = (variant:string) => {

    if(variant === "primary"){return "#224DFF"}
    else if(variant === "secondary"){return "#FFFFFF"}
    return "#1132B7"
   }


  return (
    <Button sx={{
        padding: "8px 16px",
        textTransform: "none",
        background: selectBackgroundColor(props.variant),
        border: props.variant === "secondary" ? "1px solid #E5E7ED" : "none",

    }}
    startIcon={
        <MyIcon
          icon={props.icon}
          colour={
            props.variant === "secondary"
              ? theme.palette.other.icon1
              : theme.palette.other.white
          }
          />
        }
        >
       <Typography
       variant="body1" 
       color={
           props.variant === "secondary"
           ? theme.palette.other.icon1
            : theme.palette.other.white
       }
       >{props.label}</Typography>
        </Button>

  );
};

export default IconTextButton