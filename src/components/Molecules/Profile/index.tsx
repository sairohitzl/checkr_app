import { Box } from '@mui/material'

import theme from '../../../theme/theme'
import ProfileAvatar from '../../Atoms/Avatar'
import Typography from '../../Atoms/Typography'

type Props = {
    name:string,
    email:string
}

const ProfileTab = ({name,email}: Props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
    <Box>
      <ProfileAvatar avatarsize={40}></ProfileAvatar>
    </Box>
    <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "8px",
          justifyContent: "space-evenly",
        }}
      >
        <Typography variant="body1" color={theme.palette.text.primary}
        sx={{
          fontWeight:500,
          fontStyle:"normal",
          lineHeight:"18px",

        }}
        >
          {name}
        </Typography>
        <Typography
          variant="caption2"
          color={theme.palette.other.secondary2}
          sx={{
            fontWeight:400,
            fontStyle:"normal",
            lineHeight:"18px",
            fontSize:"12px"
  
          }}
        >
          {email}
        </Typography>
      </Box>
    </Box>
  )
}

export default ProfileTab