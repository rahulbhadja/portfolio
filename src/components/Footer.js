import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia contact'>
        <a
          href='https://www.instagram.com/rahull.ts/'
          target='_blank'
          rel='noreferrer'
        >
          <InstagramIcon className='icons' />
        </a>

        <a
          href='https://twitter.com/Rahul_bhadja'
          target='_blank'
          rel='noreferrer'
        >
          <TwitterIcon className='icons' />
        </a>

        <a
          href='https://www.linkedin.com/in/rahulbhadja13/'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedInIcon className='icons' />
        </a>
      </div>
      <p> &copy; 2022 rahulbhadja</p>
    </div>
  );
}

export default Footer;
