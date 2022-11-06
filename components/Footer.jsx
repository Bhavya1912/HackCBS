import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Apne Doctor All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram href="https://www.instagram.com/" />
        <AiOutlineTwitter href="https://twitter.com/" />
      </p>
    </div>
  )
}

export default Footer
