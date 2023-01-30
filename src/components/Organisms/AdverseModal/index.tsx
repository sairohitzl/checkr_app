import { Box, Grid, Stack, Divider, Dialog } from "@mui/material";
import React from "react";
import theme from "../../../theme/theme";
import ButtonElement from "../../Atoms/Button";
import Typography from "../../Atoms/Typography";
import MyIcon from "../../Atoms/MyIcon";
import CandidateType from "../../../utils/candidate";
import { NavigateFunction, useNavigate } from "react-router-dom";

type AdverseModalProps = {
    open: boolean;
    handleClose: () => void;
    candidate: CandidateType;
    charges: (string | boolean)[][];
  };

  const AdverseModal = (props: AdverseModalProps)=>{
    //let navigate: NavigateFunction = useNavigate();
    return (
        <Dialog
          open={props.open}
          onClose={props.handleClose}
          fullWidth
          maxWidth="md"
        >
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
       <Typography
       variant={"subtitle1"}
       color={theme.palette.text.primary}>
        Pre-Adverse Action Notice
       </Typography>
       <Box onClick={props.handleClose}>
        <MyIcon icon="close"/>
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
            <Typography
              variant={"caption1"}
              color={theme.palette.text.primary}
            >
              From:
            </Typography>
            <Typography
              variant={"caption1"}
              color={theme.palette.text.secondary}
            >
              james.rodriguez@checkr.com
            </Typography>
          </Box>
          <Box>
            <Typography variant={"caption1"}>To: </Typography>
            <Typography
              variant={"caption1"}
              color={theme.palette.text.secondary}
            >
              {props.candidate?.email ?? "john.smith@checkr.com"}
            </Typography>
          </Box>
          <Box>
            <Typography variant={"caption1"}>
              Subject:
            </Typography>
            <Typography
              variant={"caption1"}
              color={theme.palette.text.secondary}
            >
              Pre-adverse action notice - checkr-bpo
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
                Please carefully review the list of charges (in bold) and your
                contact information.
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
                Please note that we will send the corresponding post adverse
                action email automatically after 7 days.
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              variant={"caption1"}
              color={theme.palette.text.secondary}
            >
              {`Dear ${props.candidate?.name ?? "John Smith"},`}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant={"caption1"}
              color={theme.palette.text.secondary}
            >
              You recently authorized checkr-bpo (“the company”) to obtain
              consumer reports and/or invistigate consumer reportsabout you from
              a consumer reporting agency. The Company is considering taking
              action in whole or in past on information in such report(s)
              including the following specific Boxs identified in the report
              prepared by Checkr, Inc.
            </Typography>
          </Box>
          {props.charges.map(
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
              If you wish to dispute the accuracy of the information in the
              report directly with the consumer reporting agency (i.e., the
              source of the informationcontained in the report), you should
              contact the agency identifield above directly.
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
                <MyIcon icon={"Attachment"} />
              <Typography
                variant={"caption2"}
                color={theme.palette.text.secondary}
              >
                Summary of right under the FCRA
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: 1,
              }}
            >
              <MyIcon icon={"Attachment"} />
              <Typography
                variant={"caption2"}
                color={theme.palette.text.secondary}
              >
                Summary of right under the FCRA
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
            onClick={() => {
            //   setAdverseAction(props.candidate);
            //   navigate("/");
            }}
          />
        </Box>
        </Box>
        </Dialog>
    );
  };
  export default AdverseModal
  