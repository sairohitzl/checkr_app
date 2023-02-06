import React, { useEffect, useState } from "react";
import {
  Dialog,
  TextField,
  Divider,
  Grid,
  InputAdornment,
  Box,
} from "@mui/material";
import Typography from "../../Atoms/Typography";
import theme from "../../../theme/theme";
import ButtonElement from "../../Atoms/Button";
import dayjs, { Dayjs } from "dayjs";
import { ThemeProvider } from "@mui/system";
import MyIcon from "../../Atoms/MyIcon";
import { getCandidates } from "../../../utils/service";
import { CSVLink } from "react-csv";
import CandidateType from "../../../utils/candidate";

type ExportCardProps = {
  open: boolean;
  handleClose: () => void;
};

const ExportCard = (props: ExportCardProps) => {
  const [candidateList, setcandidatesList] = useState<CandidateType[]>([]);
  const [fCandidateList, setfCandidateList] = useState<CandidateType[]>([]);

  useEffect(() => {
    getCandidates().then((res) => {
      setcandidatesList(res);
      setfCandidateList(res);
    });
  }, []);

  const [value1, setValue1] = React.useState<Dayjs | null>(
    dayjs("2016-07-18T21:08:54")
  );
  const [value2, setValue2] = React.useState<Dayjs | null>(
    dayjs("2016-07-18T21:08:54")
  );
  const handleChange1 = (newValue: string) => {
    setValue1(dayjs(newValue, "yyyy-mm-dd"));

    const filteredCandidateList = checkDateRange(newValue, value2!.toString());

    setfCandidateList([...filteredCandidateList]);
  };
  const handleChange2 = (newValue: string) => {
    setValue2(dayjs(newValue, "yyyy-mm-dd"));

    const filteredCandidateList = checkDateRange(value1!.toString(), newValue);

    setfCandidateList([...filteredCandidateList]);
  };

  const checkDateRange = (date1: string, date2: string) => {
    return candidateList.filter(
      (value) =>
        dayjs(value.date, "yyyy/mm/dd").diff(dayjs(date1, "yyyy-mm-dd")) >= 0 &&
        dayjs(value.date, "yyyy/mm/dd").diff(dayjs(date2, "yyyy-mm-dd")) <= 0
    );
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      fullWidth
      maxWidth="md"
    >
      <ThemeProvider theme={theme}>
        <Box>
          <Box sx={{ padding: "16px" }}>
            <Typography variant="subtitle1">
              Export Candidate Reports CSV
            </Typography>
          </Box>
          <Divider />
          <Grid
            container
            justifyContent={"space-between"}
            sx={{
              padding: "16px",
            }}
            columnGap={1}
            rowGap={1}
          >
            <Grid item xs={5}>
              <Typography variant="body2" color={theme.palette.text.secondary}>
                Reports From
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color={theme.palette.text.secondary}>
                Reports To
              </Typography>
            </Grid>
            <Grid xs={5}>
              <TextField
                type={"date"}
                sx={{ borderRadius: "4px" }}
                size="small"
                fullWidth
                defaultValue={"2017-05-24"}
                onChange={(event) => {
                  handleChange1(event.target.value);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MyIcon
                        icon="calendar"
                        colour={theme.palette.primary["400"]}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid xs={5}>
              <TextField
                type={"date"}
                sx={{
                  borderRadius: "4px",
                }}
                size="small"
                defaultValue={"2017-05-24"}
                fullWidth
                onChange={(event) => {
                  handleChange2(event.target.value);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MyIcon
                        icon="calendar"
                        colour={theme.palette.primary["400"]}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Box sx={{ height: "200px" }}></Box>
          </Grid>
          <Divider />
          <Box
            sx={{
              padding: "16px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <CSVLink data={fCandidateList}>
              <ButtonElement
                label={"Export Report"}
                variant={"primary"}
                onClick={props.handleClose}
              />
            </CSVLink>
          </Box>
        </Box>
      </ThemeProvider>
    </Dialog>
  );
};

export default ExportCard;
