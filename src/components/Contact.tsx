import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:jay@hetu.me" data-cursor="disable">
                jay@hetu.me
              </a>
            </p>
            <h4>Education</h4>
            <p>MBA (in progress)<br />University of Gloucestershire</p>
          </div>
          <div className="contact-box">
            <h4>Social & Book</h4>
            <a
              href="https://www.linkedin.com/in/jaxpatel/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.youtube.com/@startwithJayP"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              YouTube <MdArrowOutward />
            </a>
            <a
              href="https://startwithjay.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Website <MdArrowOutward />
            </a>
            <a
              href="https://cosmofeed.com/vp/655f0e35855cff001d2e7d35"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              My Book <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> for <span>Jay Patel</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
