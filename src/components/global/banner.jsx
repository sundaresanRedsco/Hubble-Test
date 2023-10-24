import { Box, Grid, Typography } from "@mui/material";
import GButton from "./GButton";
import { styled, keyframes } from "@mui/system";
import ClustHome from "../../assets/images/starclusterpurple.avif";
import PlanetHome from "../../assets/images/blueplanet.avif";

import glowVulLeft from "../../assets/svg/blob1.svg";
import glowVulRight from "../../assets/svg/blob2.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BlueGalaxyImage from "../../assets/images/galaxyblue.avif";

const ImageTag = styled("img")(({ theme }) => ({
  width: "700px",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    width: "100%", // Adjust the width for smaller screens
    height: "100%", // Allow the height to adjust automatically
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Adjust the width for smaller screens
    height: "100%", // Allow the height to adjust automatically
  },
}));

const ClusterImage = styled("img")`
  position: absolute;
  left: -40%;
  top: -30%;
  z-index: -1;
`;

const ClusterPlanet = styled("img")`
  position: absolute;
  width: 200px;
  right: 40%;
  bottom: 20%;
  z-index: -1;
`;

const rotate = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

// const GalaxyImage = styled("img")({
//   position: "absolute",
//   width: "158px",
//   top: "70px",
//   zIndex: 99999,
//   // animation: `${rotate} 5s linear infinite`,
// });

const LeftVulImage = styled("img")`
  position: absolute;
  left: 0;
  top: -10%;
  z-index: -1;
`;

const RightVulImage = styled("img")`
  position: absolute;
  right: 0;
  top: -10%;
  z-index: -1;
`;

export default function Banner(props) {
  const {
    home,
    vulnerability,
    fullWidth,
    subBanner,
    alignCenterText,
    headSubLabel,
    headerText,
    headerTextVariant,
    paraText,
    button,
    buttonLabel,
    arrowText,
    image,
    imageFluid,
  } = props;
  return (
    <section className="banner">
      <Grid container className="my-2 position-relative">
        {home && (
          <>
            <ClusterImage src={ClustHome} alt="" />
            <ClusterPlanet src={PlanetHome} alt="" />
          </>
        )}

        {vulnerability && (
          <>
            <LeftVulImage src={glowVulLeft} alt="" />
            <RightVulImage src={glowVulRight} alt="" />
          </>
        )}

        <Grid
          md={6}
          sm={12}
          className={
            "d-flex justify-content-center" +
            (alignCenterText ? " align-items-center" : "")
          }
        >
          <Box
            sx={{
              width: {
                xs: subBanner ? "100%" : "87%",
                md: fullWidth ? "100%" : "75%",
                sm: fullWidth ? "100%" : "75%",
              },
            }}
            // className={fullWidth ? "w-100" : "w-75"}
          >
            <Typography
              style={{ color: "var(--text-primary)" }}
              className="my-3"
            >
              {headSubLabel}
            </Typography>
            <Typography
              variant={headerTextVariant}
              style={{ color: "var(--white)" }}
              className="my-3"
              sx={{
                fontSize: { xs: "2.2rem", md: "3.75rem", sm: "3.75rem" },
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
            >
              {headerText}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "var(--text-primary)",
                fontSize: { xs: "1.125rem", md: "1.25rem", sm: "1.25rem" },
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
              className="my-3"
            >
              {paraText}
            </Typography>

            {button && (
              <Box
                sx={{
                  width: { xs: "100%", md: "50%", sm: "50%" },
                  marginRight: { xs: "auto", md: "0", sm: "0" },
                  marginLeft: { xs: "auto", md: "0", sm: "0" },
                }}
                className=" my-2 "
              >
                <GButton
                  btnType="primary"
                  label={buttonLabel}
                  btnClassName="w-100 "
                  btnStyle={{ padding: "12px" }}
                />
              </Box>
            )}
            {arrowText && (
              <Box className="my-4">
                <Typography variant="subtitle" className="mt-3">
                  {arrowText}
                  <Box
                    sx={{
                      display: "inline",
                      background: "var(--secondary-color)",
                      borderRadius: "100%",
                      margin: "10px",
                      padding: "5px 7px",
                    }}
                  >
                    <ArrowForwardIcon
                      sx={{
                        fontSize: "15px",
                      }}
                    />
                  </Box>
                </Typography>
              </Box>
            )}
          </Box>
        </Grid>
        <Grid md={6} sm={12} sx={{ overflow: "hidden" }}>
          {/* <GalaxyImage src={BlueGalaxyImage} alt="" /> */}
          <ImageTag
            src={image}
            alt="hero"
            className={imageFluid ? "img-fluid" : ""}
          />
        </Grid>
      </Grid>
    </section>
  );
}
