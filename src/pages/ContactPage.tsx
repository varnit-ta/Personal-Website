import "../styles/ContactPage.css";
import twitter from "../assets/Social Media Icons/twitter.png";
import github from "../assets/Social Media Icons/github.png";
import linkedin from "../assets/Social Media Icons/linkedin.png";

const ContactPage = () => {
  return (
    <div className="page">
      <div className="contact">
        <div className="contact-text">
          <p>Do you want to tallk ?</p>
          <p>
            Let's make something incredible together!{" "}
            <a href="mailto:varnitsingh65@gmail.com">varnitsingh65@gmail.com</a>
          </p>
        </div>

        <div className="contact-techstack">
          <a href="https://twitter.com/varnit_singh_">
            <img src={twitter} alt="" />
          </a>
          <a href="https://github.com/varnit-ta">
            <img src={github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/varnit-ta/">
            <img src={linkedin} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
