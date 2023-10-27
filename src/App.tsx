import React from 'react';
import './App.scss';
import ProjectCard from './components/ProjectCard';
import CryptoViewerImg from './assets/CryptoViewer.png';

function App() {
  return (
    <div className="App">
      <ProjectCard 
      img={CryptoViewerImg}
      title="Crypto Price Viewer" 
      desc="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
      alt="Crypto Price Viewer Website"
      />
    </div>
  );
}

export default App;
