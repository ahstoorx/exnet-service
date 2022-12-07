import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TousElement from './TousElement';
import AmoiElement from './AmoiElement';
import DemoiElement from './DemoiElement';
import Surveillez from './Surveillez';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, }}>
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Selecttab() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%',position:'absolute',marginTop:'60px',bottom:'auto',top:50,marginBottom:'90px' }}>
      <AppBar sx={{top:'110px',marginBottom:'30px'}} >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{ backgroundColor: '#ececec', color: 'black' }}
        >
          <Tab label="Tous" {...a11yProps(0)} />
          <Tab label="A moi" {...a11yProps(1)} />
          <Tab label="De moi" {...a11yProps(2)} />
          <Tab label="Surveiller" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      
        <TabPanel value={value} index={0} dir={theme.direction} style={{paddingTop:'35px'}}>
          {[...Array(10).keys()].map(item => (
              <TousElement />
          ))

          }
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} style={{paddingTop:'35px'}}>
        {[...Array(10).keys()].map(item => (
              <AmoiElement />
          ))

          }
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction} style={{paddingTop:'35px'}}>
        {[...Array(10).keys()].map(item => (
              <DemoiElement />
          ))

          }
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction} style={{paddingTop:'35px'}}>
        {[...Array(5).keys()].map(item => (
              <Surveillez />
          ))

          }
        </TabPanel>
      
    </Box>
  );
}