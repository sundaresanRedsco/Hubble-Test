import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import TeamPic from "../assets/images/team.jpg";
import companyLogo from "../assets/images/company_logo.png";
import aboutHeroCover from "../assets/svg/aboutBlob.svg";
import glowLeft from "../assets/svg/glow-left.svg";
import glowRight from "../assets/svg/glow-right.svg";
import FullBanner from "../components/global/fullBanner";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AcUnitTwoToneIcon from "@mui/icons-material/AcUnitTwoTone";
import Address from "../assets/images/address1.png";
import Galaxy from "../assets/images/galaxy.png";

const AboutBannerCard = styled(Box)(({ theme }) => ({
  marginRight: "50px",
  marginLeft: "50px",
  marginBottom: "70px",
  paddingTop: "50px",
  paddingBottom: "50px",
  borderBottom: "2px solid transparent",
  borderImage: `linear-gradient(0.25turn, rgb(247 247 247 / 0), rgb(249 249 249 / 4%), rgb(255 255 255))`,
  borderImageSlice: 1,

  [theme.breakpoints.down("sm")]: {
    marginRight: "0px", // Adjust the margin for smaller screens
    marginLeft: "0px", // Adjust the margin for smaller screens
    marginBottom: "30px", // Adjust the margin for smaller screens
    paddingTop: "30px", // Adjust the padding for smaller screens
    paddingBottom: "30px", // Adjust the padding for smaller screens
  },
}));

const AnimatedAboutGrid = styled(Grid)`
  && {
    padding: 3px;
    visibility: hidden; /* Set initial visibility */

    ${({ isSliding, delay }) =>
      isSliding &&
      `
      animation: slideFromRight 1s linear ${delay}s forwards;
    `}

    @keyframes slideFromRight {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
        visibility: visible; /* Set visibility in the animation keyframes */
      }
    }
  }
`;

const TeamCard = styled(Grid)(({ theme }) => ({
  border: "1px solid var(--border-primary)",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  background:
    "linear-gradient(to bottom left, var(--secondary-color) -50%, transparent 25%, transparent)",

  [theme.breakpoints.down("sm")]: {
    display: "block", // Adjust the width for smaller screens
  },
}));

const TeamProfileCard = styled("img")`
  width: 270px;
  height: 250px;
  object-fit: cover;
  object-position: top;
  border-radius: 10px;
`;

const LogoCard = styled(Box)(({ theme }) => ({
  padding: "10px",
  margin: "5px",
  border: "1px solid var(--white)",
  borderRadius: "10px",

  "&:hover": {
    borderColor: "var(--secondary-color)",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "5px", // Adjust padding for smaller screens
    margin: "2px", // Adjust margin for smaller screens
    "& img": {
      width: "100%", // Adjust image width for smaller screens
      height: "100%", // Adjust image height for smaller screens
    },
  },
}));

const CareersCard = styled(Box)(({ theme }) => ({
  minHeight: "400px",
  border: "1px solid var(--border-primary)",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px",

  [theme.breakpoints.down("sm")]: {
    padding: "20px", // Adjust the padding for smaller screens
  },
}));

const BlobImage = styled("img")(({ theme }) => ({
  position: "absolute",
  width: "100%",
  top: "-20px",
  zIndex: -1,

  [theme.breakpoints.down("sm")]: {
    // Adjust the width for smaller screens
    top: "initial",
    bottom: "0px", // Adjust the top position for smaller screens
  },
}));

const LeftImage = styled("img")(({ theme }) => ({
  position: "absolute",
  width: "600px",
  height: "600px",
  zIndex: -1,
  left: "-10%",

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const RightImage = styled("img")(({ theme }) => ({
  position: "absolute",
  width: "600px",
  height: "600px",
  zIndex: -1,
  right: "-10%",

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export default function About() {
  const teams = [
    {
      image: "",
      name: "Tom Parker",
      position: "CEO & Janitor",
      linkedInlink: "",
    },
    {
      image: "",
      name: "Alex Lisle",
      position: "CTO & Code Wrangler",
      linkedInlink: "",
    },
  ];

  const careerInfo = [
    {
      icon: "",
      head: "Employee equity plan",
      sub: "We are strong believers in a business-owner mentality - and want you to be more than just an employee., but to feel you're an integral part of Hubble.",
    },
    {
      icon: "",
      head: "Employee equity plan",
      sub: "We are strong believers in a business-owner mentality - and want you to be more than just an employee., but to feel you're an integral part of Hubble.",
    },
    {
      icon: "",
      head: "Employee equity plan",
      sub: "We are strong believers in a business-owner mentality - and want you to be more than just an employee., but to feel you're an integral part of Hubble.",
    },
    {
      icon: "",
      head: "Employee equity plan",
      sub: "We are strong believers in a business-owner mentality - and want you to be more than just an employee., but to feel you're an integral part of Hubble.",
    },
    {
      icon: "",
      head: "Employee equity plan",
      sub: "We are strong believers in a business-owner mentality - and want you to be more than just an employee., but to feel you're an integral part of Hubble.",
    },
    {
      icon: "",
      head: "Employee equity plan",
      sub: "We are strong believers in a business-owner mentality - and want you to be more than just an employee., but to feel you're an integral part of Hubble.",
    },
    {
      icon: "",
      head: "Employee equity plan",
      sub: "We are strong believers in a business-owner mentality - and want you to be more than just an employee., but to feel you're an integral part of Hubble.",
    },
    {
      icon: "",
      head: "Employee equity plan",
      sub: "We are strong believers in a business-owner mentality - and want you to be more than just an employee., but to feel you're an integral part of Hubble.",
    },
    {
      icon: "",
      head: "Employee equity plan",
      sub: "We are strong believers in a business-owner mentality - and want you to be more than just an employee., but to feel you're an integral part of Hubble.",
    },
    {
      icon: "",
      head: "Employee equity plan",
      sub: "We are strong believers in a business-owner mentality - and want you to be more than just an employee., but to feel you're an integral part of Hubble.",
    },
  ];
  return (
    <section className="about">
      <BlobImage src={aboutHeroCover} alt="bg" />
      <AboutBannerCard className="aboutBanner px-3 " sx={{}}>
        <Box
          sx={{ width: { xs: "80%", md: "40%", sm: "40%" } }}
          className="mx-auto "
        >
          <Typography
            variant="h2"
            className="text-center mb-4"
            sx={{
              fontSize: { xs: "2rem", md: "3.75rem", sm: "3.75rem" },
            }}
          >
            Our mission
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "var(--text-primary)",
              textAlign: "center",
              fontSize: { xs: "1.125rem", md: "1.25rem", sm: "1.25rem" },
            }}
          >
            Complete and accurate asset intelligence that enables teams across
            the enterprise to unlock trapped value, providing big picture
            insights to increase security and business velocity.
          </Typography>
        </Box>
      </AboutBannerCard>

      <div className="container my-3" style={{ overflowX: "hidden" }}>
        <Grid container>
          <AnimatedAboutGrid
            md={6}
            sm={12}
            className="p-3 pl-0"
            isSliding={true}
            delay={0}
          >
            <Typography
              variant="h4"
              className="mb-3"
              sx={{
                fontSize: { xs: "1.5rem", md: "2.25rem", sm: "2.25rem" },
                textAlign: { xs: "center", md: "left", sm: "left" },
              }}
            >
              Our origin story
            </Typography>
            <Typography
              style={{ color: "var(--text-primary)" }}
              sx={{
                textAlign: { xs: "center", md: "left", sm: "left" },
              }}
            >
              Hubble grew from the idea that legacy solutions were failing to
              provide organizations with the asset visibility they needed to
              effectively secure and operate their businesses — while new,
              so-called CAASM solutions were not being bold enough to address
              the problem of asset visibility more holistically — leaving many
              stakeholders in the cold.
              <br />
              <br />
              Our investors agreed, and during the middle of the global
              pandemic, we went boldly to change this. A single platform for
              all, that will allow a broad set of users to eliminate risks,
              reduce operating costs and enable transformation across the entire
              enterprise.
            </Typography>
          </AnimatedAboutGrid>
          <AnimatedAboutGrid
            md={6}
            sm={12}
            className="p-3 pr-0"
            isSliding={true}
            delay={1}
          >
            <Typography
              variant="h4"
              className="mb-3"
              sx={{
                fontSize: { xs: "1.5rem", md: "2.25rem", sm: "2.25rem" },
                textAlign: { xs: "center", md: "left", sm: "left" },
              }}
            >
              Where is this all going?
            </Typography>
            <Typography
              style={{ color: "var(--text-primary)" }}
              sx={{
                textAlign: { xs: "center", md: "left", sm: "left" },
              }}
            >
              The cyber security market is notoriously fragmented – littered
              with point solutions that are scattered around the smallest of
              niches in the enterprise. The lack of a comprehensive, technology
              asset platform is a strategic weakness for many organizations and
              therefore cannot, and should not, be solved at a macro level — or
              even within security by itself.
              <br />
              <br />
              Solving this systemic issue is a team sport, and we intend on
              providing the tools needed for the entire business to come
              together for the first time, to establish a single, trusted record
              of a company’s technology assets.
            </Typography>
          </AnimatedAboutGrid>
        </Grid>

        <Box
          sx={{
            marginTop: "4rem",
            marginBottom: "4rem",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontSize: { xs: "1.8rem", md: "3rem", sm: "3rem" },
            }}
            className="mb-4"
          >
            Our leadership
          </Typography>
          <Grid container>
            {teams.map((data, index) => (
              <Grid key={index} sm={12} md={6} className="p-2">
                <TeamCard className="p-3">
                  <TeamProfileCard src={TeamPic} alt="" className="img-fluid" />
                  <Box
                    className="pl-4 pr-2"
                    sx={{
                      height: "150px",
                      textAlign: { xs: "center", md: "left", sm: "left" },
                    }}
                  >
                    <Typography variant="h4" className="mb-2">
                      {data.name}
                    </Typography>
                    <Typography variant="h6">{data.position}</Typography>
                    <Box
                      sx={{
                        width: "fit-content",
                        marginTop: "20px",
                        padding: "10px",
                        border: "1px solid var(--border-primary)",
                        borderRadius: "100%",
                        textAlign: "center",
                      }}
                    >
                      <LinkedInIcon />
                    </Box>
                  </Box>
                </TeamCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>

      <Box
        sx={{
          height: "500px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <LeftImage src={glowLeft} alt="" />
        <RightImage src={glowRight} alt="" />
        <Box>
          <Typography
            variant="h2"
            textAlign={"center"}
            sx={{
              fontSize: { xs: "1.8rem", md: "3.75rem", sm: "3.75rem" },
            }}
          >
            Our investors
          </Typography>
          <Box className="d-flex  mx-auto mt-5">
            <LogoCard sx={{}}>
              <img src={companyLogo} alt="nn" className="img-fluid" />
            </LogoCard>
            <LogoCard>
              <img src={companyLogo} alt="nn" className="img-fluid" />
            </LogoCard>{" "}
            <LogoCard>
              <img src={companyLogo} alt="nn" className="img-fluid" />
            </LogoCard>
          </Box>
        </Box>
      </Box>

      <div className="container">
        <Box className="text-center">
          <Typography
            sx={{
              color: "var(--secondary-color)",
              textTransform: "uppercase",
              fontSize: { xs: "0.8rem", md: "1rem", sm: "1rem" },
            }}
            className="my-2"
          >
            CAREERS
          </Typography>

          <Typography
            variant="h3"
            className="my-3 mb-4"
            sx={{ fontSize: { xs: "2.25rem", md: "3rem", sm: "3rem" } }}
          >
            Come work with us!
          </Typography>

          <Typography variant="subtitle" className="mt-3">
            Join the team!
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

          <Grid container className="mt-2">
            {careerInfo.map((data, index) => (
              <Grid key={index} sm={12} md={4} className="p-2">
                <CareersCard
                  sx={{
                    textAlign: { xs: "center", md: "left", sm: "left" },
                  }}
                >
                  <Box>
                    <AcUnitTwoToneIcon
                      sx={{
                        width: "4rem",
                        height: "4rem",
                      }}
                      className="mb-2"
                    />
                    <Typography
                      variant="h5"
                      className="mb-3"
                      sx={{
                        fontSize: {
                          xs: "1.3rem",
                          md: "1.5rem",
                          sm: "1.5rem",
                        },
                        textAlign: { xs: "center", md: "left", sm: "left" },
                      }}
                    >
                      {data.head}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: {
                          xs: "1.125rem",
                          md: "1.25rem",
                          sm: "1.25rem",
                        },
                      }}
                    >
                      {data.sub}
                    </Typography>
                  </Box>
                </CareersCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box>
          <Grid container>
            <Grid
              sm={12}
              md={6}
              className="d-flex align-items-center justify-content-center"
            >
              <Box
                className="col-md-9"
                sx={{
                  backgroundImage: `url(${Galaxy})`,
                  backgroundPosition: "left",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              >
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
                  Hubble HQ
                </Typography>
                <Box
                  className=" mb-4"
                  sx={{
                    display: {
                      xs: "block",
                      md: "flex",
                      sm: "flex",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: {
                        xs: "1.25rem",
                        md: "1.5rem",
                        sm: "1.5rem",
                      },
                      textAlign: { xs: "center", md: "left", sm: "left" },
                    }}
                  >
                    11951 Freedom Drive Suite 1020 Reston, VA 20190
                  </Typography>

                  <Box>
                    <Typography className="d-block mb-3">Twitter</Typography>
                    <Typography>LinkedIn</Typography>
                  </Box>
                </Box>
                <Typography
                  variant="subtitle"
                  className="mt-3"
                  sx={{
                    textAlign: { xs: "center", md: "left", sm: "left" },
                  }}
                >
                  Get Directions
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
            </Grid>
            <Grid sm={12} md={6}>
              <img src={Address} alt="" className="img-fluid" />
            </Grid>
          </Grid>
        </Box>

        <FullBanner
          headerText={
            <>
              Bring complete visibility <br />
              to your technology <br />
              assets
            </>
          }
        />
      </div>
    </section>
  );
}
