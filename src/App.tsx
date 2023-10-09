import React from 'react';
import './App.scss';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card
      title = "Dummy" 
      imgSrc = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT9bSOdcTrMK_8j-GM1CxGBCMStyiUs2UIjjVWQhj7nTq_sLObt"
      description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu vestibulum dui, nec eleifend nunc."
      projectUrl = "https://github.com/malabudi"
      />
    </div>
  );
}

export default App;
