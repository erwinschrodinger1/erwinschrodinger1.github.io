import React from "react";
import "../Styles/NavigationBar.sass";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function NavigationBar() {
  return (
    <div className="NavigationBar">
      <div className="logo">
        <h1>NB</h1>
      </div>
      <div className="contents">
        <div className="socialConnect">
          <div>
            <a
              href="https://www.facebook.com/nirjal.bhurtel.1/"
              rel="noreferrer"
              target="_blank"
            >
              {/* change to link */}
              <FaFacebook size={24} />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/nirjal-bhurtel-163510149/?originalSubdomain=np"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          <div>
            <a
              href="https://www.facebook.com/nirjal.bhurtel.1/"
              rel="noreferrer"
              target="_blank"
            >
              <FaInstagram size={24} />
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/nirjal_bhurtel?lang=en"
              rel="noreferrer"
              target="_blank"
            >
              <FaTwitter size={24} />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/erwinschrodinger1/"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub size={24} />
            </a>
          </div>
        </div>
        <a
          className="about"
          href="mailto:sunnynirjal@gmail.com"
          rel="noreferrer"
        >
          <p>Contact Me</p>
          <AiOutlineArrowRight />
        </a>
      </div>
    </div>
  );
}
