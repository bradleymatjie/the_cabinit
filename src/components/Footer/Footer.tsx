import React from 'react';
import './Footer.scss';

import logo from '../../media/logo.png';
import fb from '../../media/socials/fb.png';
import yt from '../../media/socials/yt.png';
import IG from '../../media/socials/IG.png';
import pinT from '../../media/socials/pinterest.png';
import twit from '../../media/socials/twitter.png';
import ksa from '../../media/ksa.png';

export const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer_container'>
        <div>
          <img
            src={logo}
            alt="logo"
            width={165}
            height={41}  
          />
          <div className='footer_socials'>
            <img 
              src={fb} 
              alt="social media item"
              width={27}
              height={27}
            />
            <img 
              src={yt} 
              alt="social media item"
              width={27}
              height={27}
            />
            <img 
              src={IG} 
              alt="social media item"
              width={27}
              height={27}
            />
            <img 
              src={pinT} 
              alt="social media item"
              width={27}
              height={27}
            />
            <img 
              src={twit} 
              alt="social media item"
              width={27}
              height={27}
            />
          </div>
        </div>

        <div className='footer_quick-links'>
          <h3>QUICK LINKS</h3>
          <ul>
            <li>WHAT WE DO</li>
            <li>WHY CABINETTS</li>
            <li>ABOUT US</li>
          </ul>
        </div>

        <div className='footer_contact'>
        <h3>Contact</h3>
          <ul>
            <li>
              <a href="tel:086 022 2463">
                086 022 2463
              </a>
            </li>
            <li>
              <a href="mailto:cloud@thecabinetco.co.za">
                cloud@thecabinetco.co.za
              </a>
            </li>
          </ul>
        </div>

        <div className='footer_postal'>
          <h3>Postal Address:</h3>
          <address>
            Prosbus 680 <br/> Jeffreys Bay, 6330
          </address>
        </div>

        <div>
          <img
            src={ksa}
            alt="ksa kitchen specialist"
            width={121}
            height={97}
          />
        </div>
      </div>
      <p className='footer_watermark'>©TheCabinetCompany | Designed by <span>Impact Studio</span></p>
    </footer>
  );
}