import React from 'react';
import './About.scss';

import AboutUs from '../../media/about.png';

export const About: React.FC = () => {
  return (
    <section className='about'>
      <div>
        <h3>WHERE IT <span>STARTED</span></h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna, 
          porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,
          vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra
        </p>
      </div>
      <img src={AboutUs} alt="founding partners" />
    </section>
  );
}