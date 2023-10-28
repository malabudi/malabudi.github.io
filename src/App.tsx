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
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={tabIndex} onChange={handleChange} centered>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
      <div>
        {tabIndex === 0 && <Projects />}
      </div>
    </div>
  );
}

export default App;
