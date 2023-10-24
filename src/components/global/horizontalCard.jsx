import { Box, Typography } from "@mui/material";

import { styled } from "@mui/system";

const HorizontalCardContainer = styled(Box)`
  border: 1px solid var(--border-primary);
  border-radius: 10px;
  background: linear-gradient(
    to right,
    ${(props) => props.gradientColor} -50%,
    transparent 20%,
    transparent
  );
`;

export default function HorizontalCard(props) {
  const { head, sub, color } = props;
  return (
    <section className="horizontalCard">
      <HorizontalCardContainer
        gradientColor={color}
        className="p-3 d-flex align-items-center"
      >
        <Box
          className="pr-3 d-flex align-items-center"
          sx={{ borderRight: "1px solid " + color, height: "fit-content" }}
        >
          <Typography
            sx={{
              color: "var(--white)",
              fontWeight: "600",
              fontSize: { xs: "1.8rem", md: "3rem", sm: "3rem" },
            }}
            variant="h3"
          >
            {head}
          </Typography>
        </Box>
        <Box className="pl-3">
          <Typography
            sx={{
              color: "var(--white)",
              fontSize: { xs: "1.125rem", md: "1.25rem", sm: "1.25rem" },
            }}
            variant="h6"
          >
            {sub}
          </Typography>
        </Box>
      </HorizontalCardContainer>
    </section>
  );
}
