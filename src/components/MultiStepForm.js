import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PersonalInfoForm from "./PersonalInfoForm.js";
import PlanForm from "./PlanForm.js"
import AddOnsForm from "./AddOnsForm.js"
import Summary from "./Summary.js"
import { Grid } from '@mui/material';
import image from "../assets/images/bg-sidebar-desktop.svg"

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  if (value != index)
    return null;
  return <>{children}</>;
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};



export default function DesktopMultiStepForm() {
  const [activeTab, setActiveTab] = React.useState(1)

  const handleChange = (event, newValue) => {
    console.log("hi")
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex", padding:'20px', height:'100vh', minWidth:'600px',  }}>
 
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={activeTab}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider",  backgroundImage:`url("../assets/images/bg-sidebar-desktop.svg")`, 
        fontColor:'white',  backgroundRepeat: "no-repeat", backgroundSize: '400px 700px', minWidth:'250px' }}
      >
        <Tab
          label="1 
          Step 1 Your Info"
          value={1}
          sx={{fontFamily:'inter', color:'white'}}
          
        />
        <Tab
          label="Step 2 Select Plan"
          value={2}
          sx={{fontFamily:'inter', color:'white'}}
          
        />
        <Tab
          label="Step 3 ADD-ONS"
          value={3}
          sx={{fontFamily:'inter', color:'white'}}
        />
        <Tab
          label="Step 4 Summary"
          value={4}
          sx={{fontFamily:'inter', color:'white'}}
        />
      </Tabs>
      <TabPanel value={activeTab} index={1}>
        <PersonalInfoForm setActiveTab={setActiveTab} />
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        <PlanForm />
      </TabPanel>
      <TabPanel value={activeTab} index={3}>
        <AddOnsForm />
      </TabPanel>
      <TabPanel value={activeTab} index={4}>
        <Summary />
      </TabPanel>
    </Box>
  );
}
