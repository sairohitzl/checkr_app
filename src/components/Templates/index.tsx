import { Grid } from "@mui/material";

type LeftNavBarProps = {
  leftNav: JSX.Element;
  navHeader: JSX.Element;
  body: JSX.Element[];
};

const LeftNavigationbar = (props: LeftNavBarProps) => {
  const { leftNav, navHeader, body } = props;
  return (
    <Grid
      container
      xs={12}
      sx={{
        padding: "20px",
        width: "100vw",
        height: "100vh",
      }}
      columnSpacing={12}
      rowSpacing={2}
      md={0}
    >
      <Grid item xs={3}>
        {leftNav}
      </Grid>
      <Grid
        item
        xs={9}
        style={{ padding: "20px" }}
        sx={{
          width: "",
          height: "100vh",
        }}
      >
        <Grid container rowSpacing={3} direction={"column"}>
          <Grid item xs={12}>
            {navHeader}
          </Grid>
          {body.map((item) => (
            <Grid item xs={12}>
              {item}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LeftNavigationbar;
