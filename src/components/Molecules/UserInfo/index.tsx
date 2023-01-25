import { Box } from '@mui/material'
import theme from '../../../theme/theme'
import MyIcon from '../../Atoms/MyIcon'
import Typography from '../../Atoms/Typography'
type Props = {
    title: string,
    name: string,
    icon: string,
}

const UserInfo = ({title,name,icon}: Props) => {
  return (
   <Box sx={{
    display : "flex",
    padding: "12px",
    background: "#FAFAFC",
    width: "330px",
    height: "68px",
    border: "1px solid #E5E7ED",
    borderRadius: "12px"
   }}>
    <Box
        sx={{
          padding: "14px",
          borderRadius: "12px",
          background: "#FFFFFF",
          border: "1px solid #E5E7ED",
         
        }}
      >
        <MyIcon icon={icon} colour="#95AAFF" />
      </Box>

      <Box sx={{
        display : "flex",
        flexDirection : "column",
        background: "#FAFAFC",
        justifyContent: "space-evenly",
        padding: "0px 0px 0px 12px",
      }}>
        <Typography variant='body2' color={theme.palette.text.secondary}>{title}</Typography>
        <Typography variant='body2' >{name}</Typography>
      </Box>

   </Box>
  )
}

export default UserInfo