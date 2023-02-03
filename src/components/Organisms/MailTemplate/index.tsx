import { Box, Divider, Grid, Modal, Paper } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useRef, useState } from "react";
import { Item } from "semantic-ui-react";
import theme from "../../../theme/theme";
import CandidateType from "../../../utils/candidate";
import ButtonElement from "../../Atoms/Button";
import CheckBox from "../../Atoms/Checkbox";
import Typography from "../../Atoms/Typography";
import AdverseModal from "../AdverseModal";
import CheckboxText from "../../Molecules/CheckboxText";
import { adverseCharges } from "../../../utils/constants";
import { adverseModalStrings } from "../../../utils/constants";

type MailTemplateProps = {
  candidate: CandidateType;
  openAdverse: boolean;
  handleClose: () => void;
  charges: (string | boolean)[][];
};

const MailTemplate = (props: MailTemplateProps) => {
  const { candidate } = props;
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
  const charges = useRef([
    [adverseCharges[0], false],
    [adverseCharges[1], false],
    [adverseCharges[2], false],
  ]);
  let handleCheckBoxClick = (index: number) => {
    charges.current[index][1] = !charges.current[index][1];
  };
  return (
    <>
      <AdverseModal
        handleClose={handleClose}
        candidate={props.candidate}
        open={open}
        charges={charges.current}
      />
      <Grid
        container
        sx={{
          backgroundColor: theme.palette.text.disabled,
          borderRadius: "12px",
          boxShadow: "0px 4px 28px rgba(45, 45, 47, 0.1)",
        }}
      >
        <Grid container sx={{ padding: "20px" }} columnGap={0.5}>
          <Typography variant={"caption1"} color={theme.palette.text.primary}>
            From:
          </Typography>
          <Typography variant={"caption1"} color={theme.palette.text.secondary}>
            james.rodriguez@checkr.com
          </Typography>
        </Grid>
        <Divider style={{ width: "100%" }} />
        <Grid container sx={{ padding: "20px" }} columnGap={0.5}>
          <Typography variant={"caption1"}>To: </Typography>
          <Typography variant={"caption1"} color={theme.palette.text.secondary}>
            {props.candidate?.email ?? "john.smith@checkr.com"}
          </Typography>
        </Grid>
        <Divider style={{ width: "100%", color: theme.palette.other.stroke }} />
        <Grid container sx={{ padding: "20px" }} columnGap={0.5}>
          <Typography variant={"caption1"}>Subject:</Typography>
          <Typography variant={"caption1"} color={theme.palette.text.secondary}>
            {adverseModalStrings.preAdverse2}
          </Typography>
        </Grid>
        <Divider style={{ width: "100%", color: theme.palette.other.stroke }} />
        <Grid
          container
          sx={{ paddingTop: "20px", paddingLeft: "20px" }}
          columnGap={0.5}
        >
          <Typography variant={"body2"} color={theme.palette.text.secondary}>
            {"Dear "}
          </Typography>
          <Typography variant={"body2"} color={theme.palette.text.secondary}>
            {props.candidate?.name ?? "John Smith"}
          </Typography>
        </Grid>
        <Grid container sx={{ paddingTop: "10px", paddingLeft: "20px" }} xs={8}>
          <Typography variant={"body2"} color={theme.palette.text.secondary}>
            {adverseModalStrings.preAdverse5}
          </Typography>
        </Grid>
        <Grid container sx={{ paddingTop: "10px", paddingLeft: "20px" }}>
          <Typography variant={"caption1"} color={theme.palette.text.primary}>
            Select the charges for the pre adverse action
          </Typography>
        </Grid>
        {charges.current.map(([charge, check], index) => (
          <Grid
            container
            sx={{ paddingTop: "12px", paddingLeft: "20px" }}
            columnGap={1}
          >
            <CheckboxText
              onClick={() => handleCheckBoxClick(index)}
              variant={"caption2"}
              text={charge.toString()}
            />
          </Grid>
        ))}

        <Grid container sx={{ paddingTop: "24px", paddingLeft: "20px" }} xs={8}>
          <Typography variant={"body2"} color={theme.palette.text.secondary}>
            {adverseModalStrings.preAdverse6}
          </Typography>
        </Grid>
        <Grid container sx={{ paddingTop: "20px", paddingLeft: "20px" }}>
          <Typography variant={"caption1"} color={theme.palette.text.secondary}>
            Sincerely,
          </Typography>
        </Grid>
        <Grid
          container
          sx={{ paddingTop: "4px", paddingLeft: "20px", paddingBottom: "40px" }}
        >
          <Typography variant={"caption1"} color={theme.palette.text.secondary}>
            Checkr-bpo
          </Typography>
        </Grid>
        <Divider style={{ width: "100%", color: theme.palette.other.stroke }} />
        <Grid container xs={12} sx={{ padding: "20px" }} alignContent="center">
          <Grid container xs={4}>
            <Grid container alignItems={"center"}>
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <Item>
                  <Typography
                    variant={"body2"}
                    color={theme.palette.text.secondary}
                  >
                    Auto send post adverse action
                  </Typography>
                </Item>
                <Item>
                  <Paper sx={{ padding: "8px 24px" }}>7</Paper>
                </Item>
                <Item>
                  <Typography
                    variant={"body2"}
                    color={theme.palette.text.secondary}
                  >
                    Days
                  </Typography>
                </Item>
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={2}>
            <ButtonElement
              label={"Preview Notice"}
              variant={"primary"}
              onClick={() => {
                setOpen(true);
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MailTemplate;
