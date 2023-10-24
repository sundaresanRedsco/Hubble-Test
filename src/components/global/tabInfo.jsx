import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/system";
import Banner from "./banner";
import Banner2 from "../../assets/images/banner2.png";
import { Box } from "@mui/material";

const StyledTab = styled(Tab)`
  color: var(--white);
  text-transform: capitalize;
  margin: 0px 20px;

  &.Mui-selected {
    background-color: var(--secondary-color);
    color: var(--active-tab-text-color);
    border-radius: 5px;
    border: none;
    outline: 0;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
`;

const CenteredTabs = styled(Tabs)`
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  width: fit-content;
  margin: auto;
  padding: 5px;
  border: 1px solid var(--border-primary);
  border-radius: 10px;

  .MuiTabs-indicator {
    background-color: transaparent !important;
  }

  .MuiTabs-root {
    position: relative;
    background-color: var(--primary-color);
    z-index: 999;
  }
`;

export default function TabInfo(props) {
  const { tabOptions } = props;
  const maxTabValue = 3;
  const [tabValue, setTabValue] = React.useState(0);

  React.useEffect(() => {
    // Function to increment the tab value and cycle back to 0
    const incrementTabValue = () => {
      setTabValue((prevTabValue) => (prevTabValue + 1) % (maxTabValue + 1));
    };

    // Set up an interval to change the tab value every few seconds
    const interval = setInterval(incrementTabValue, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <CenteredTabs
        value={tabValue}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
        sx={{
          marginBottom: "-20px",
          position: "relative",
          display: { xs: "none", md: "block", sm: "block" },
        }}
      >
        {tabOptions.map((data, index) => (
          <StyledTab
            key={index}
            label={data}
            onClick={(e) => {
              setTabValue(index);
            }}
          />
        ))}
      </CenteredTabs>
      <Box
        sx={{
          border: "1px solid var(--border-primary)",
          borderRadius: "10px",
          paddingLeft: { sm: "0px", md: "70px", sm: "0px" },
        }}
        className=" pt-3"
      >
        <Banner
          fullWidth
          headerText={"What is an Asset?"}
          headerTextVariant={"h3"}
          paraText="In today’s rapidly evolving digital landscape, organizations must broaden their understanding of what constitutes a security asset. Here at Hubble Technology, an asset is considered to be anything that has value to an organization."
          arrowText="Learn more"
          image={Banner2}
          imageFluid
        />
      </Box>
    </>
  );
}
