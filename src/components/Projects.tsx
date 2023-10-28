import ProjectCard from "./ProjectCard";
import CryptoViewerImg from '../assets/CryptoViewer.png';
import '../styles/projects.scss';

export default function Projects() {
  return (
    <div className='projects-container'>
        <ProjectCard 
        className='card'
        img={CryptoViewerImg}
        title="Crypto Price Viewer" 
        desc="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        alt="Crypto Price Viewer Website"
        url="https://github.com/malabudi/AssetPriceViewer"
        />
        <ProjectCard
        className='card'
        img={CryptoViewerImg}
        title="Crypto Price Viewer" 
        desc="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        alt="Crypto Price Viewer Website"
        url="https://github.com/malabudi/AssetPriceViewer"
        />
        <ProjectCard
        className='card'
        img={CryptoViewerImg}
        title="Crypto Price Viewer" 
        desc="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        alt="Crypto Price Viewer Website"
        url="https://github.com/malabudi/AssetPriceViewer"
        />
        <ProjectCard
        className='card'
        img={CryptoViewerImg}
        title="Crypto Price Viewer" 
        desc="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        alt="Crypto Price Viewer Website"
        url="https://github.com/malabudi/AssetPriceViewer"
        />
    </div>
  );
}