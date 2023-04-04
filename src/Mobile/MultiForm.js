import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PersonalInfo from './PersonalInfo';
import LooksOneRoundedIcon from '@mui/icons-material/LooksOneRounded';
import image from "../assets/images/bg-sidebar-mobile.svg"
import PlanInfo from './PlanInfo';
import AddOns from './AddOns';
import Summary from './Summary';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MobileMultiStepForm() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', }}>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider',  backgroundImage:`url("../assets/images/bg-sidebar-mobile.svg")`,  backgroundRepeat: "no-repeat", backgroundSize: 'cover', height:'150px' }}>
      {/* <img src={image} /> */}
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{paddingTop:'20px', paddingLeft:'30%'}}>
         
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <PersonalInfo  />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PlanInfo />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AddOns />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Summary />
      </TabPanel>
    </Box>
  );
}