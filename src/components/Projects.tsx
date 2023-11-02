import ProjectCard from "./ProjectCard";
import CryptoViewerImg from '../assets/CryptoViewer.png';
import HackathonImg from '../assets/Hackathon.png';
import '../styles/projects.scss';

export default function Projects() {
  return (
    <div className='page-wrapper'>
      <div className='projects-container fade-in'>
        <ProjectCard 
        className='card'
        img={CryptoViewerImg}
        title="Crypto Price Viewer" 
        desc="
          Using CoinMarketCap's API, the crypto price viewer website displays the top 200 cryptocurrencies by market cap in a table. The table 
          features a search bar to filter the results from the table, and pagination to page through 10 cryptos at a time. Although not currently
          deployed for cost reasons, the frontend was deployed to netlify and the api was deployed to railway. There is also a light/dark mode toggle
          for the page.
        "
        alt="Crypto Price Viewer Website"
        url="https://github.com/malabudi/AssetPriceViewer"
        builtWith='AngularJS, NestJS, NX, TypeScript'
        />

        <ProjectCard
        className='card'
        img={HackathonImg}
        title="Study Buddy - Hackathon Project"
        desc="
          During Fall of 2023, I worked with three people in a hackathon called HackDearborn to build this website. Using OpenAi, a user enters a prompt
          which will be their topic for the AI to generate. Using the topic OpenAI will generate flashcards for the user and display them on a seperate page.
          Using the flashcards, it gets fed back into OpenAI's API to generate quiz questions also for the user. The user can then study off the flashcards generated
          for them and quiz on the flashcards as much as they like.
        "
        alt="Hackathon Project from HackDearborn"
        url="https://github.com/malabudi/AssetPriceViewer"
        builtWith='ReactJS, Flask, TypeScript, Python'
        />
      </div>
    </div>
  );
}