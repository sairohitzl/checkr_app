import { Box, Grid, Stack, Divider, Dialog } from "@mui/material";
import React from "react";
import theme from "../../../theme/theme";
import ButtonElement from "../../Atoms/Button";
import Typography from "../../Atoms/Typography";
import MyIcon from "../../Atoms/MyIcon";
import CandidateType from "../../../utils/candidate";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { randomStrings } from "../../../utils/constants";
type AdverseModalProps = {
  open: boolean;
  handleClose: () => void;
  candidate: CandidateType;
  charges: (string | boolean)[][];
};

const AdverseModal = (props: AdverseModalProps) => {
  //let navigate: NavigateFunction = useNavigate();
  const { open, handleClose, candidate, charges } = props;
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <Box
        sx={{
          backgroundColor: theme.palette.other.white,
          borderRadius: "6px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "16px 20px",
          }}
        >
          <Typography variant={"caption2"} color={theme.palette.text.primary}>
            {randomStrings["preAdverse1"]}
          </Typography>
          <Box onClick={handleClose}>
            <MyIcon icon="close" />
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            rowGap: 2,
            flexDirection: "column",
            padding: "16px 20px",
          }}
        >
          <Box>
            <Typography variant={"caption1"} color={theme.palette.text.primary}>
              From:
            </Typography>
            <Typography
              variant={"caption1"}
              color={theme.palette.text.secondary}
            >
              {randomStrings["demoEmail1"]}
            </Typography>
          </Box>
          <Box>
            <Typography variant={"caption1"}>To: </Typography>
            <Typography
              variant={"caption1"}
              color={theme.palette.text.secondary}
            >
              {candidate?.email ?? randomStrings["demoEmail2"]}
            </Typography>
          </Box>
          <Box>
            <Typography variant={"caption1"}>Subject:</Typography>
            <Typography
              variant={"caption1"}
              color={theme.palette.text.secondary}
            >
              {randomStrings["preAdverse2"]}
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "10px",
              backgroundColor: theme.palette.other.emailbg,
              borderRadius: "4px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: 1,
              }}
            >
              <div
                style={{
                  borderRadius: "50%",
                  width: "5px",
                  height: "5px",
                  backgroundColor: theme.palette.other.emailfg,
                }}
              ></div>
              <Typography
                variant={"caption2"}
                color={theme.palette.other.emailfg}
              >
                {randomStrings["preAdverse3"]}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: 1,
              }}
            >
              <div
                style={{
                  borderRadius: "50%",
                  width: "5px",
                  height: "5px",
                  backgroundColor: theme.palette.other.emailfg,
                }}
              ></div>
              <Typography
                variant={"caption2"}
                color={theme.palette.other.emailfg}
              >
                {randomStrings["preAdverse4"]}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              variant={"caption1"}
              color={theme.palette.text.secondary}
            >
              {`Dear ${candidate?.name ?? randomStrings["name"]},`}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant={"caption1"}
              color={theme.palette.text.secondary}
            >
              {randomStrings["preAdverse5"]}
            </Typography>
          </Box>
          {charges.map(
            ([charge, check]) =>
              check && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: 1,
                  }}
                >
                  <Box
                    style={{
                      borderRadius: "50%",
                      width: "5px",
                      height: "5px",
                      backgroundColor: "black",
                    }}
                  ></Box>
                  <Typography
                    variant={"caption2"}
                    color={theme.palette.text.secondary}
                  >
                    {charge.toString()}
                  </Typography>
                </Box>
              )
          )}
          <Box>
            <Typography
              variant={"caption1"}
              color={theme.palette.text.secondary}
            >
              {randomStrings["preAdverse6"]}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant={"caption1"}
              color={theme.palette.text.secondary}
            >
              Sincerely,
            </Typography>
            <br />
            <Typography
              variant={"caption1"}
              color={theme.palette.text.secondary}
            >
              Checkr-bpo
            </Typography>
          </Box>
          <Box>
            <span>
              <Typography
                variant={"caption2"}
                fontWeight={600}
                color={theme.palette.text.primary}
              >
                Attachments
              </Typography>
            </span>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: 1,
              }}
            >
              <MyIcon icon={"attachment"} />
              <Typography
                variant={"caption2"}
                color={theme.palette.text.secondary}
              >
                {randomStrings["preAdverse7"]}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: 1,
              }}
            >
              <MyIcon icon={"attachment"} />
              <Typography
                variant={"caption2"}
                color={theme.palette.text.secondary}
              >
                {randomStrings["preAdverse7"]}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            width: "95%",
            textAlign: "right",
            padding: "16px 20px",
          }}
        >
          <ButtonElement
            label={"Submit Notice"}
            variant={"primary"}
            onClick={() => {}}
          />
        </Box>
      </Box>
    </Dialog>
  );
};
export default AdverseModal;
