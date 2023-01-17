import React from 'react';
import './Home.scss';

import{ Testimony } from '../Testimonies/Testimony';

import portfolio1 from '../../media/portfolio-item1.png';
import portfolio2 from '../../media/portfolio-item2.png';
import portfolio3 from '../../media/portfolio-item3.png';
import portfolio4 from '../../media/portfolio-item4.png';
import portfolio5 from '../../media/portfolio-item5.png';
import portfolio6 from '../../media/portfolio-item6.png';
import portfolio7 from '../../media/portfolio-item7.png';
import portfolio8 from '../../media/portfolio-item8.png';
import portfolio9 from '../../media/portfolio-item9.png';
import portfolio10 from '../../media/portfolio-item10.png';
import portfolio11 from '../../media/portfolio-item11.png';

import home_installation from '../../media/home-installation.png';
import dev_projects from '../../media/developer-projects-img.png';

export const Home: React.FC = () => {

  return (
    <section className='home'>
      <h1 className='home_title'>TRUSTED LEADER IN <span>CABINET DESIGN</span></h1>

      <div className='home_image-container'>
        <img
          src={portfolio1} 
          alt="portfolio item"
        />
        
        <img 
          src={portfolio2} 
          alt="portfolio item"
          className='portfolio-item'
        />
        <img
          src={portfolio3}
          alt="portfolio item"
          className='portfolio-item'
        />
        <img
          src={portfolio4}
          alt="portfolio item"
          className='portfolio-item'
        />
        <img
          src={portfolio5}
          alt="portfolio item"
          className='portfolio-item'
        />
        <img
          src={portfolio6}
          alt="portfolio item"
        />
      </div>

      <div className='home_image-container2'>
        <img
          src={portfolio7}
          alt="portfolio item"
        />
        <img
          src={portfolio8}
          alt="portfolio item"
          className='portfolio-item'
        />
        <img
          src={portfolio9}
          alt="portfolio item"
          className='portfolio-item'
        />
        <img
          src={portfolio10}
          alt="portfolio item"
          className='portfolio-item'
        />
        <img
          src={portfolio11}
          alt="portfolio item"
        />
      </div>

      <article className='home_testimonies'>
        <Testimony />
      </article>

      <div className='home_cards'>
        <div>
          <img src={home_installation} alt="portfolio item" />
          <h3>Custom home installation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis lectus.</p>
          <button>LEARN MORE</button>
        </div>

        <div>
          <img src={dev_projects} alt="portfolio item" />
          <h3>Developer <br/>projects</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis lectus.</p>
          <button>LEARN MORE</button>
        </div>
      </div>
        <hr className='border-line' />
      <h3 className='home_last-title'>The Cabinet Company can build you the cabinet of your dreams.
        <span>You dream it, we design it.</span></h3>
    </section>
  );
}