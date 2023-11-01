import { Divider } from '@mui/material';
import '../styles/about-me.scss';
import Links from './Links';

function Bio() {
    return (
        <div className='bio'>
            <img
                className='abt-me-img'
                src='https://media.licdn.com/dms/image/C4D03AQEM9cVbift0JA/profile-displayphoto-shrink_100_100/0/1623087000120?e=1704326400&v=beta&t=k0MMSuwRJwfboAPBAxIt2QN7hJmluh775Q_n4Evqqv0' 
                alt='A headshot of myself'
            />
            <div className='description'>
                <p>
                    I'm a self-motivated software developer based in Dearborn, Michigan, currently pursuing a Bachelor's in Software Engineering (expected graduation: 
                    December 2024). My primary expertise lies in full-stack web development, supplemented by ongoing learning in AWS cloud technologies. I'm keen to 
                    master industry-standard frameworks, explore mobile development, and deepen my cloud expertise. Additionally, I've completed two software engineering 
                    internships and undertaken various personal projects.
                <br /><br />
                    Beyond software development, I am an active member in the goodle developer society club (GDSC) at University of Michigan - Dearborn.
                    I've also participated in hackathons, one during rocket company's hackweek during my internship in Summer 2023, and HackDearborn
                    hosted by GDSC in Fall 2023. I also enjoy gaming, cooking, and play guitar and drums.
                </p>
            </div>
         </div>
    );
}

export default function AboutMe() {
  return (
    <div className='page-wrapper'>
        <div className='fade-in'>
            <p className='welcome'>Hi There 👋 I'm</p>
            <h1>Mohamad Alabudi</h1>
            <Bio />
            <Divider variant="middle" />
            <Links />
        </div>
    </div>
  );
}