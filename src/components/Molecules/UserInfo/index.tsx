import { Box } from "@mui/material";
import theme from "../../../theme/theme";
import MyIcon from "../../Atoms/MyIcon";
import Typography from "../../Atoms/Typography";

export type UserInfoProps = {
  title: string;
  name: string;
  icon: string;
};

const UserInfo = (props: UserInfoProps) => {
  const { title, name, icon } = props;
  return (
    <Box
      sx={{
        display: "flex",
        padding: "12px",
        background: "#FAFAFC",
        border: `1px solid ${theme.palette.other.stroke}`,
        borderRadius: "12px",
      }}
    >
      <Box
        sx={{
          padding: "14px",
          borderRadius: "12px",
          background: theme.palette.text.disabled,
          border: `1px solid ${theme.palette.other.stroke}`,
        }}
      >
        <MyIcon icon={icon} colour={theme.palette.primary["400"]} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "#FAFAFC",
          justifyContent: "space-evenly",
          padding: "0px 0px 0px 12px",
        }}
      >
        <Typography variant="body2" color={theme.palette.text.secondary}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            lineHeight: "20px",
          }}
        >
          {name}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserInfo;
