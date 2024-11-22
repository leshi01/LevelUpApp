import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Timetable from './Timetable';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{
        height: '100%',
        overflowY: 'auto',
        msOverflowStyle: 'none', // Hide scrollbar in IE and Edge
        scrollbarWidth: 'none', // Hide scrollbar in Firefox
      }}
    >
      {value === index && (
        <Box sx={{ p: 3, '&::-webkit-scrollbar': { display: 'none' } }}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
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

export default function Days() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', overflow: 'hidden', position: 'static' }}>
      <Box sx={{ width: '80%', height: '100%', alignSelf: 'center', overflow: 'hidden' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center', position: 'sticky', top: 0, zIndex: 1 }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Monday" {...a11yProps(0)} />
            <Tab label="Tuesday" {...a11yProps(1)} />
            <Tab label="Wednesday" {...a11yProps(2)} />
            <Tab label="Thursday" {...a11yProps(3)} />
            <Tab label="Friday" {...a11yProps(4)} />
            <Tab label="Saturday" {...a11yProps(5)} />
          </Tabs>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'black', width: '100%', overflow: 'hidden' }}>
          <CustomTabPanel value={value} index={0}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Timetable time="09:00 - 10:00" />
              <Timetable time="10:00 - 11:00" />
              <Timetable time="11:00 - 12:00" />
              <Timetable time="12:00 - 13:00" />
              <Timetable time="13:00 - 14:00" />
              <Timetable time="14:00 - 15:00" />
              <Timetable time="15:00 - 16:00" />
              <Timetable time="13:00 - 14:00" />
              <Timetable time="14:00 - 15:00" />
              <Timetable time="15:00 - 16:00" />
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Timetable />
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Timetable />
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Timetable />
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Timetable />
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Timetable />
            </Box>
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>
  );
}