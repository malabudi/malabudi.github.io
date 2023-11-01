import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import '../styles/links.scss';

export default function Links() {
  return (
    <div className='links'>
        <a href='https://www.linkedin.com/in/mohamad-alabudi-7936ab1b2/' target='_blank' rel='noreferrer'><LinkedInIcon /></a>
        <a href='https://github.com/malabudi' target='_blank' rel='noreferrer'><GitHubIcon /></a>
        <a href='mailto:mohamadalabudi42@gmail.com' target='_blank' rel='noreferrer'><MailOutlineIcon /></a>
    </div>
  );
}