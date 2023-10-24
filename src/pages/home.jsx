import React from "react";
import Banner from "../components/global/banner";
import { Box, Grid, Typography } from "@mui/material";
import HorizontalCard from "../components/global/horizontalCard";
import BannerCard from "../components/global/bannerCard";
import heroBanner from "../assets/images/heroBanner.png";
import Banner2 from "../assets/images/banner2.png";
import companyLogo from "../assets/images/company_logo.png";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { styled } from "@mui/system";
import TabInfo from "../components/global/tabInfo";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Marquee from "react-fast-marquee";
import SeeImage from "../assets/images/see.avif";
import VerticalCardScroll from "./test";

const ClientCard = styled(Grid)`
  border: 1px solid var(--border-primary);
  border-radius: 10px;
  transition: background 0.3s;
  &:hover {
    background: linear-gradient(
      to left,
      var(--secondary-color) -30%,
      transparent 30%,
      transparent
    );
  }
`;

export default function Home() {
  const cardInfo = [
    {
      head: "62%",
      sub: "of security practitioners have blindspots hampering their security program",
      color: "var(--yellow)",
    },
    {
      head: "73%",
      sub: "of organizations are worried about their growing attack surface",
      color: "var(--quatenery-color)",
    },
  ];

  const serviceInfo = [
    {
      head: "74M+",
      sub: "Assets Discovered and Secured with Hubble",
      color: "var(--yellow)",
    },
    {
      head: "10M+",
      sub: "Previously Unknown Cloud Services Identified",
      color: "var(--quatenery-color)",
    },

    {
      head: "24M+",
      sub: "Applications Analyzed for New Intelligence",
      color: "var(--yellow)",
    },
  ];

  const testimonials = [
    {
      profession: "Im a CISO",
      feed: "Identify blind spots in your vulnerability management program and enable risk based remediation prioritization with Hubble.",
    },
    {
      profession: "Im a CISO",
      feed: "Identify blind spots in your vulnerability management program and enable risk based remediation prioritization with Hubble.",
    },
    {
      profession: "Im a CISO",
      feed: "Identify blind spots in your vulnerability management program and enable risk based remediation prioritization with Hubble.",
    },
    {
      profession: "Im a CISO",
      feed: "Identify blind spots in your vulnerability management program and enable risk based remediation prioritization with Hubble.",
    },
  ];
  const customerTestimonials = [
    {
      name: "Steve, CISO",
      para: "Hubble has demonstrated they can help us reduce cyber risk quickly and effectively.",
    },
    {
      name: "Steve, CISO",
      para: "Hubble has demonstrated they can help us reduce cyber risk quickly and effectively.",
    },
    {
      name: "Steve, CISO",
      para: "Hubble has demonstrated they can help us reduce cyber risk quickly and effectively.",
    },
    {
      name: "Steve, CISO",
      para: "Hubble has demonstrated they can help us reduce cyber risk quickly and effectively.",
    },
    {
      name: "Steve, CISO",
      para: "Hubble has demonstrated they can help us reduce cyber risk quickly and effectively.",
    },
    {
      name: "Steve, CISO",
      para: "Hubble has demonstrated they can help us reduce cyber risk quickly and effectively.",
    },
    {
      name: "Steve, CISO",
      para: "Hubble has demonstrated they can help us reduce cyber risk quickly and effectively.",
    },
    {
      name: "Steve, CISO",
      para: "Hubble has demonstrated they can help us reduce cyber risk quickly and effectively.",
    },
  ];

  const options = {
    items: 3, // Number of items to display
    nav: false, // Navigation arrows
    dots: false,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 1000, // Autoplay interval in milliseconds
    loop: true, // Enable loop
  };

  return (
    <div className="home">
      <Banner
        home
        headerText={"The Next-Generation Cyber Asset Visibility Platform"}
        headerTextVariant={"h2"}
        paraText="Learn how Hubble provides complete visibility of your assets and their relationships while addressing mounting vulnerabilities and the ever-evolving attack surface."
        button
        buttonLabel="Learn More"
        image={heroBanner}
      />

      <div className="container">
        <Grid container spacing={2} className="mb-5">
          {cardInfo.map((data, index) => (
            <Grid item md={6} sm={12} key={data.head}>
              <HorizontalCard
                head={data.head}
                sub={data.sub}
                color={data.color}
              />
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            width: {
              xs: "85%",
              md: "70%",
              sm: "70%",
            },
            margin: "100px 0px",
          }}
          className="mx-auto  py-3"
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.8rem", md: "3rem", sm: "3rem" },
            }}
            className="text-center"
          >
            Gain Context, Address Blind Spots, and Eliminate Universal Risk &
            Exposure
          </Typography>
        </Box>

        <BannerCard
          headerText={"Gain Context"}
          paraText={
            "Through data aggregation, Hubble’s Asset Intelligence™ platform brings context to your existing data and identifies new assets and risks currently flying under the radar of the overall network – bringing agentless visibility to your entire tech stack."
          }
          image={SeeImage}
          imageFluid
          imageStyle={{ width: "100%", height: "100%" }}
        />

        {/* <VerticalCardScroll /> */}
        <Grid container spacing={2} className="my-4">
          {serviceInfo.map((data, index) => (
            <Grid item sm={12} md={4} key={data.head}>
              <HorizontalCard
                head={data.head}
                sub={data.sub}
                color={data.color}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ margin: "150px 0px" }}>
          <Banner
            fullWidth
            subBanner
            headerText={"What is an Asset?"}
            headerTextVariant={"h3"}
            paraText="In today’s rapidly evolving digital landscape, organizations must broaden their understanding of what constitutes a security asset. Here at Hubble Technology, an asset is considered to be anything that has value to an organization."
            image={Banner2}
            imageFluid
            arrowText="Explore Hubble's Asset Definition"
          />
        </Box>

        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.8rem", md: "3rem", sm: "3rem" },
          }}
          className="text-center"
        >
          Meet Our Users
        </Typography>
        <Typography
          textAlign={"center"}
          className="mt-2"
          sx={{
            color: "var(--text-primary)",
            fontSize: { xs: "1.125rem", md: "1.125rem", sm: "1.125rem" },
          }}
        >
          Where IT and Security Visionaries Align with Hubble
        </Typography>

        <Grid container className="my-3 mb-5" spacing={2}>
          {testimonials.map((data, index) => (
            <Grid sm={12} md={6} className="p-2">
              <ClientCard
                key={index}
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
                className="px-3 py-2 "
              >
                <Person2OutlinedIcon className="mb-1" />
                <Typography variant="h5" className="text-center mb-2">
                  {data.profession}
                </Typography>
                <Typography
                  textAlign={"center"}
                  sx={{ color: "var(--text-primary)" }}
                  className="w-75 mx-auto"
                >
                  {data.feed}
                </Typography>
              </ClientCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ margin: "150px 0px" }}>
          <Typography
            variant="h3"
            textAlign={"center"}
            sx={{ fontSize: { xs: "1.8rem", md: "3rem", sm: "3rem" } }}
            className="mb-4"
          >
            Customized to Your Use Case
          </Typography>
          <TabInfo
            tabOptions={[
              "Vulnerability Management",
              "Security Operations",
              "Data Governance",
              "IT Blind Sports",
            ]}
          />
        </Box>

        <Box className="mt-5">
          <Typography
            variant="h3"
            className="mb-3"
            sx={{
              fontSize: { xs: "1.8rem", md: "3rem", sm: "3rem" },
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            Hear From Our
            <br /> Customers
          </Typography>

          <Typography
            variant="subtitle"
            className="mt-4"
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            Meet our customers
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

          {/* <OwlCarousel className="owl-theme mt-5" {...options}> */}
          {/* <Grid container> */}
          <Marquee className="py-2">
            <Grid container>
              <Grid xs={3} className="p-1">
                <Box
                  sx={{
                    border: "1px solid var(--border-primary)",
                    borderRadius: "10px",
                    height: "300px",
                    width: "350px",
                  }}
                  className="p-3  d-flex align-items-center"
                >
                  <div>
                    <Typography variant="h5" >
                      Asset visibility is a strategic imperative that should
                      underpin any security program.
                    </Typography>
                    <Typography
                      sx={{ color: "var( --link-color)" }}
                      className="my-2"
                    >
                      Tester Byrd, CISO
                    </Typography>
                  </div>
                </Box>
              </Grid>
              <Grid xs={3} className="p-1">
                <Box
                  sx={{
                    border: "1px solid var(--border-primary)",
                    borderRadius: "10px",
                    height: "300px",
                    width: "350px",
                  }}
                  className="p-3  d-flex align-items-center"
                >
                  <div>
                    <Typography variant="h5">
                      Asset visibility is a strategic imperative that should
                      underpin any security program.
                    </Typography>
                    <Typography
                      sx={{ color: "var( --link-color)" }}
                      className="my-2"
                    >
                      Tim Byrd, CISO
                    </Typography>
                  </div>
                </Box>
              </Grid>
              <Grid xs={3} className="p-1">
                <Box
                  sx={{
                    border: "1px solid var(--border-primary)",
                    borderRadius: "10px",
                    height: "300px",
                    width: "350px",
                  }}
                  className="p-3  d-flex align-items-center"
                >
                  <div>
                    <Typography variant="h5">
                      Asset visibility is a strategic imperative that should
                      underpin any security program.
                    </Typography>
                    <Typography
                      sx={{ color: "var( --link-color)" }}
                      className="my-2"
                    >
                      Testm Byrd, CISO
                    </Typography>
                  </div>
                </Box>
              </Grid>{" "}
              <Grid xs={3} className="p-1">
                <Box
                  sx={{
                    border: "1px solid var(--border-primary)",
                    borderRadius: "10px",
                    height: "300px",
                    width: "350px",
                  }}
                  className="p-3  d-flex align-items-center"
                >
                  <div>
                    <Typography variant="h5">
                      Asset visibility is a strategic imperative that should
                      underpin any security program.
                    </Typography>
                    <Typography
                      sx={{ color: "var( --link-color)" }}
                      className="my-2"
                    >
                      Joe jam, CISO
                    </Typography>
                  </div>
                </Box>
              </Grid>
            </Grid>
            {/* </Grid> */}
            {/* </OwlCarousel> */}
          </Marquee>
        </Box>

        <Box className="my-5">
          <Typography textAlign={"center"} variant="h3">
            Trusted By
          </Typography>

          <Grid container>
            <Grid sx={12} md={6} >
              <img src={companyLogo} alt="img" className="img-fluid" />
            </Grid>
            <Grid sx={12} md={6} >
              <img src={companyLogo} alt="img" className="img-fluid" />
            </Grid>{" "}
            <Grid sx={12} md={6} >
              <img src={companyLogo} alt="img" className="img-fluid" />
            </Grid>{" "}
            <Grid sx={12} md={6} >
              <img src={companyLogo} alt="img" className="img-fluid" />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
