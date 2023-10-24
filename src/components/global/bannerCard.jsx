import { Box, Grid, Typography } from "@mui/material";
import GButton from "./GButton";
import QuoteVulGlow from "../../assets/svg/quote-glow.svg";
import NoiseBack from "../../assets/images/noise.png";
import { styled } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ImageTag = styled("img")({
  // width: "100%",
  // height: "100%",
});

const VulBottomImage = styled("img")`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
`;
export default function BannerCard(props) {
  const {
    vulnerability,
    reverse,
    headerText,
    paraText,
    image,
    imageStyle,
    arrowText,
    button,
    buttonLabel,
  } = props;
  return (
    <section className="bannerCard">
      <Grid
        container
        className="my-2"
        sx={{
          height: { xs: "fit-content", md: "400px", sm: "400px" },

          border: "1px solid var(--border-primary)",
          borderRadius: "10px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          style={{
            backgroundImage: `url(${NoiseBack})`,
            backgroundPosition: "contain",
            backgroundRepeat: "repeat",
            height: "400px",
            width: "100%",
            position: "absolute",
            opacity: "0.1",
          }}
        ></Box>
        <VulBottomImage src={QuoteVulGlow} alt="" />
        <Grid
          sm={12}
          md={6}
          sx={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "end",
            order: reverse ? 1 : 0,
          }}
        >
          <ImageTag
            src={image}
            alt="hero"
            className=""
            sx={{ ...imageStyle }}
          />
        </Grid>

        <Grid
          sm={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Box className="w-75 mb-4">
            <Typography
              variant="h4"
              style={{ color: "var(--white)" }}
              className="my-3"
              sx={{
                fontSize: { xs: "1.5rem", md: "2.125rem", sm: "2.125rem" },
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
            >
              {headerText}
            </Typography>
            <Typography
              sx={{
                color: "var(--text-primary)",
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
              className="my-4"
            >
              {paraText}
            </Typography>
            {arrowText && (
              <Typography variant="subtitle" className="mt-3">
                {arrowText}

                <Box
                  sx={{
                    display: "inline",
                    background: "var(--secondary-color)",
                    borderRadius: "100%",
                    margin: "10px",
                    padding: "5px 7px",
                    "& hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <ArrowForwardIcon
                    sx={{
                      fontSize: "15px",
                    }}
                  />
                </Box>
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}
