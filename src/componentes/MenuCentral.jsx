import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TousElement from './TousElement';
import { allExpedition } from '../expeditionsData/allExpedition';
import { listeExpeditions } from '../expeditionsData/listeExpeditions';
import { importData } from '../expeditionsData/importData';
import { surveillezListe } from '../expeditionsData/surveillezListe';

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

export default function MenuCentral({ type }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%', position: 'sticky', marginTop: '10px', bottom: 'auto', top: 50, marginBottom: '90px' }}>
      <AppBar sx={{ top: '110px', marginBottom: '170px', top: 150 }} >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{ backgroundColor: '#ececec', color: 'black' }}
        >
          <Tab label="En cours" {...a11yProps(0)} />
          <Tab label="Livrées" {...a11yProps(1)} />
          <Tab label="Toutes" {...a11yProps(2)} />

        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction} style={{ paddingTop: '180px' }}>
        {allExpedition.map((item, index) => (
          <TousElement type={type} key={index} numero={item.numero} service={item.societe} depart={item.depart} livraison={item.livraison} />
        ))

        }

      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction} style={{ paddingTop: '180px' }}>
        {importData.map((item, index) => (
          <TousElement type={type} key={index} numero={item.numero} service={item.societe} depart={item.depart} livraison={item.livraison} />
        ))

        }
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction} style={{ paddingTop: '180px' }}>
        {listeExpeditions.map((item, index) => (
          <TousElement type={type} key={index} numero={item.numero} service={item.societe} depart={item.depart} livraison={item.livraison} />
        ))

        }
      </TabPanel>


    </Box>
  );
}
