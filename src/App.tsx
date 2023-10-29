import { Box, Tab, Tabs } from '@mui/material';
import './App.scss';
import Projects from './components/Projects';
import { useState } from 'react';

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <div className="App">
      <Box sx={{ width: '100%', bgcolor: '#565656' }}>
        <Tabs
        value={tabIndex} 
        onChange={handleChange} 
        centered
        sx = {{
          '& button': {
            borderRadius: 1,
            transition: 'all 0.25s ease',
            color: '#FFFFFF'
          },
          '& button.Mui-selected': {color: '#fba92c'},
          '& button:hover': {backgroundColor: '#9e9e9e'}
        }}

        TabIndicatorProps={{
          style: {
            backgroundColor: '#fba92c'
          }
        }}
        >
          <Tab label="Projects" />
          <Tab label="About Me" />
          <Tab label="Resume" />
          <Tab label="Contact" />
        </Tabs>
      </Box>

      {/* Tab Contents */}
      <div>
        {tabIndex === 0 && <Projects />}
      </div>
    </div>
  );
}

export default App;
