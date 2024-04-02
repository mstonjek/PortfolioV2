import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
//import { FaFacebookF} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a target="_blank" href="https://instagram.com/mstonjek">
          <BsInstagram />
        </a>
      </div>

      <div>
        <a target="_blank" href="https://linktr.ee/m.stonjek">
          <AiOutlineLink />
        </a>
      </div>

      <div>
        <a target="_blank" href="https://github.com/mstonjek">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
