import twitter from '../assets/Social Media Icons/twitter.png';
import github from '../assets/Social Media Icons/github.png';
import linkedin from '../assets/Social Media Icons/linkedin.png';

const SocialMedia = () => {
    return (  
        <div className="social-media">
            <a href="https://twitter.com/varnit_singh_"><img src={twitter} alt=""/></a>
            <a href="https://github.com/varnit-ta"><img src={github} alt=""/></a>
            <a href="https://www.linkedin.com/in/varnit-ta/"><img src={linkedin} alt=""/></a>
        </div>
    );
}
 
export default SocialMedia;