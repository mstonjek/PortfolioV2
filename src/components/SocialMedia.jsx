import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          target="_blank"
          href="https://instagram.com/mstonjek"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <BsInstagram />
        </a>
      </div>

      <div>
        <a
          target="_blank"
          href="https://linktr.ee/m.stonjek"
          rel="noreferrer"
          aria-label="Linktree"
        >
          <AiOutlineLink />
        </a>
      </div>

      <div>
        <a
          target="_blank"
          href="https://github.com/mstonjek"
          rel="noreferrer"
          aria-label="Github"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
