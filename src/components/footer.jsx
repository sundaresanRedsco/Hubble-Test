import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import GButton from "./global/GButton";
import { styled } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const FooterLinkTypography = styled(Typography)`
  cursor: pointer;
  &:hover {
    color: var(--secondary-color);
  }
`;

export default function Footer() {
  return (
    <section className="footer">
      <Container>
        <Grid container>
          <Grid xs={12} md={2}>
            <Typography variant="h4">Hubble</Typography>
            <Typography>info@hubble.net</Typography>
            <Box className="mt-4">
              <LinkedInIcon className="mr-2" />
              <TwitterIcon />
            </Box>
          </Grid>
          <Grid sm={6} md={2} className="p-1">
            <Typography
              variant="h6"
              sx={{ color: "var(--text-primary)" }}
              className="mb-3"
            >
              Hubble
            </Typography>
            <FooterLinkTypography className="mb-1">
              Why Hubble?
            </FooterLinkTypography>
            <FooterLinkTypography className="mb-1">
              Platform
            </FooterLinkTypography>
            <FooterLinkTypography className="mb-1">
              Security
            </FooterLinkTypography>
          </Grid>{" "}
          <Grid sm={6} md={2} className="">
            <Typography
              variant="h6"
              sx={{ color: "var(--text-primary)" }}
              className="mb-3"
            >
              Solutions
            </Typography>
            <FooterLinkTypography className="mb-1">
              Vulnerability Management
            </FooterLinkTypography>
            <FooterLinkTypography className="mb-1">
              Security Operations
            </FooterLinkTypography>
            <FooterLinkTypography className="mb-1">
              Data Governance
            </FooterLinkTypography>
            <FooterLinkTypography className="mb-1">
              IT Blind Spots
            </FooterLinkTypography>{" "}
            <FooterLinkTypography className="mb-1">
              Business Continuity
            </FooterLinkTypography>
          </Grid>{" "}
          <Grid sm={6} md={2} className="px-2 p-1">
            <Typography
              variant="h6"
              sx={{ color: "var(--text-primary)", visibility: "hidden" }}
              className="mb-3"
            >
              Resources
            </Typography>
            <FooterLinkTypography className="mb-1">
              For CISOs
            </FooterLinkTypography>
            <FooterLinkTypography className="mb-1">
              For CIOs
            </FooterLinkTypography>
            <FooterLinkTypography className="mb-1">
              For Security Operators
            </FooterLinkTypography>
          </Grid>
          <Grid sm={6} md={2} className="p-1">
            <Typography
              variant="h6"
              sx={{ color: "var(--text-primary)" }}
              className="mb-3"
            >
              Resources
            </Typography>

            <FooterLinkTypography className="mb-1">
              Customer Stories
            </FooterLinkTypography>
            <FooterLinkTypography className="mb-1">
              Articles
            </FooterLinkTypography>
            <FooterLinkTypography className="mb-1">Press</FooterLinkTypography>
          </Grid>
          <Grid sm={6} md={2} className="p-1">
            <Typography
              variant="h6"
              sx={{ color: "var(--text-primary)" }}
              className="mb-3"
            >
              Company
            </Typography>
            <FooterLinkTypography className="mb-1">About</FooterLinkTypography>
            <FooterLinkTypography className="mb-1">
              Careers
            </FooterLinkTypography>
            <FooterLinkTypography className="mb-1">
              Contact
            </FooterLinkTypography>
          </Grid>
          <Grid sm={12} md={6} className="my-5">
            <Typography
              variant="h5"
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Get the latest updates.
              <br /> Subscribe for our newsletter Enter your email
            </Typography>
          </Grid>
          <Grid sm={12} md={6} className="my-5">
            <Box
              sx={{
                border: "1px solid var(--border-primary)",
                borderRadius: "10px",
              }}
              className="d-flex justfiy-content-between p-2"
            >
              <TextField
                fullWidth
                placeholder="Enter your email"
                style={{
                  color: "var(--text-primary)",
                }}
              />

              <GButton
                btnType="primary"
                label="Subscribe"
                btnClassName="py-0 px-5"
              />
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1.5px solid var(--border-primary)",
            display: { xs: "block", md: "flex", sm: "flex" },
            textAlign: { xs: "center", md: "left", sm: "left" },
          }}
          className=" justify-content-between py-3 pt-5"
        >
          <Box
            sx={{
              display: { xs: "block", md: "flex", sm: "flex" },
            }}
          >
            <Typography className="mx-2 my-2">Privacy Policy</Typography>
            <Typography className="mx-2  my-2">Terms and Conditions</Typography>
          </Box>

          <Typography className=" my-2" sx={{ color: "var(--text-primary)" }}>
            © Hubble 2023 All rights reserved
          </Typography>
        </Box>
      </Container>
    </section>
  );
}
