import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faGithub,
  faTwitter,
  faBehanceSquare,
  faCodepen} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

import './footer.css'


export default function Footer(){
  return (
    <div className="footer">
      <div className="footCont">
        <span className="copyrightText">
          Copyright © 2021. cocobyte. All rights reserved
        </span>
        <div className="socialinks">
          <a href="https://github.com/Coco-Bytes/cocobyte-client" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:blueedgetechno@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  )
}
