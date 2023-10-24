import { Box, Typography } from "@mui/material";
import GButton from "./GButton";
import { styled } from "@mui/system";
import glowLeft from "../../assets/svg/cta-glow-left.svg";
import glowTopRight from "../../assets/svg/cta-glow-tr.svg";
import glowBottom from "../../assets/svg/cta-glow-br.svg";
import NoiseBack from "../../assets/images/noise.png";

const OuterBox = styled(Box)`
position:relative;
  margin: 3rem 0px;
  border-radius: 20px;
  height:500px;
  display:flex;
  justify-content:center;
  align-items:center;
  transition: background 0.3s;

  overflow:hidden;
//   &:hover {
//     background: linear-gradient(
//       to left,
//       var(--secondary-color) -30%,
//       transparent 30%,
//       transparent
//     );
  }
`;

const LeftImage = styled("img")`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
`;

const TopRightImage = styled("img")`
  position: absolute;
  right: 0%;
  top: 0;
  z-index: -1;
`;
const BottomImage = styled("img")`
  position: absolute;
  right: 0%;
  bottom: 0;
  z-index: -1;
`;

export default function FullBanner(props) {
  const { headerText } = props;
  return (
    <>
      <OuterBox>
        <Box
          style={{
            backgroundImage: `url(${NoiseBack})`,
            backgroundPosition: "contain",
            backgroundRepeat: "repeat",
            height:  { xs: "fit-content", md: "500px", sm: "500px" },
            width: "100%",
            position: "absolute",
            opacity: "0.2",
          }}
        ></Box>
        <LeftImage src={glowLeft} alt="" />
        <TopRightImage src={glowTopRight} alt="" />
        <BottomImage src={glowBottom} alt="" />
        <Box className="text-center">
          <Typography
            variant="h3"
            className="my-4"
            sx={{
              fontSize: {
                xs: "1.8rem",
                md: "3rem",
                sm: "3rem",
              },
              textAlign: { xs: "center", md: "left", sm: "left" },
            }}
          >
            {headerText}
          </Typography>
          <GButton
            btnType="primary"
            label="Get started"
            btnClassName="my-3 py-3 px-5"
          />
        </Box>
      </OuterBox>
    </>
  );
}
