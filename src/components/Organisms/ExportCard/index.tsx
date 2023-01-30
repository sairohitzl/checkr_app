import React from 'react'
import { Dialog,
    Stack,
    TextField,
    Divider,
    Grid,
    InputAdornment,
    Box,
  } from "@mui/material";
import Typography from '../../Atoms/Typography'
import theme from '../../../theme/theme';
import ButtonElement from '../../Atoms/Button';
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ThemeProvider, width } from "@mui/system";
import MyIcon from '../../Atoms/MyIcon';

type ExportCardProps = {
    open: boolean;
    handleClose: () => void;
  };

type Props = {}

const ExportCard = (props: ExportCardProps) => {
    const [value1, setValue1] = React.useState<Dayjs | null>(
        dayjs("2016-07-18T21:08:54")
      );
      const [value2, setValue2] = React.useState<Dayjs | null>(
        dayjs("2016-07-18T21:08:54")
      );
      const handleChange1 = (newValue: Dayjs | null) => {
        setValue1(newValue);
      };
      const handleChange2 = (newValue: Dayjs | null) => {
        setValue2(newValue);
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
            <Typography variant="subtitle1"  fontWeight={"bold"}>
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
                <Typography variant="body2"
                color={theme.palette.text.secondary}>
                     Reports From
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography
                variant='body2'
                color={theme.palette.text.secondary}>
                     Reports To
                </Typography>
            </Grid>
            <Grid xs={5}>
            <TextField
                type={"date"}
                sx={{ borderRadius: "4px" }}
    
                fullWidth
                defaultValue={"2017-05-24"}
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
        
                defaultValue={"2017-05-24"}
                fullWidth
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
            <ButtonElement
              label={"Export Report"}
              variant={"primary"}
              onClick={props.handleClose}
            />
          </Box>
        </Box>

    </ThemeProvider>
    </Dialog>
  )};
  

export default ExportCard