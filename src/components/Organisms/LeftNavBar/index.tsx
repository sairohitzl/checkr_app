import { styled } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../../theme/theme";
import React from 'react'
import MyIcon from "../../Atoms/MyIcon";
import Typography from "../../Atoms/Typography";
import IconText, { IconTextProps } from "../../Molecules/IconText";
import ProfileTab from "../../Molecules/Profile";


type Props = {
    data: IconTextProps[];
}

const StyledBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "6px",
    height: "650px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 28px rgba(45, 45, 47, 0.1)",
    width: "250px",
    
  });

const LeftNavBar = (props:Props) =>{
    return (
        <StyledBox>
            <Box >
                <Box sx={{padding: "20px 28px"}}>
                    <Typography 
                    variant="h6"
                    color={theme.palette.other.logo}
                    fontWeight={"bold"}>
                        RECRUIT
                    </Typography>
                </Box>
                <Box sx={{ paddingLeft: "16px", paddingRight: "16px" }}>
                    {props.data.map((item) => (
                        <IconText
                        icon={item.icon}
                        title={item.title}
                        active={item.active}
                        />
                    ))}
                </Box>
            </Box>
            <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px",
                borderTop: "1px solid #E5E7ED",
            }}>
                <ProfileTab name="James Rodriguez" email="James.co"/>
                <MyIcon icon="logout" colour="#696A6E"/>
            </Box>
        </StyledBox>
    );
};

export default LeftNavBar
