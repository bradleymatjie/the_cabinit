import React, { useState } from 'react';
import './Services.scss';

import kitchens from '../../media/services/kitchen.png';
import bedrooms from '../../media/services/bedroom.png';
import bathrooms from '../../media/services/bathroom.png';
import other from '../../media/services/other.png';
import kitchensHover from '../../media/services/kitchenHover.png';
import bedroomsHover from '../../media/services/bedroomsHover.png';
import bathroomsHover from '../../media/services/bathroomsHover.png';
import otherHover from '../../media/services/otherHover.png';


export const Services: React.FC = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
     setIsHover(true);
  };

  const handleMouseLeave = () => {
     setIsHover(false);
  };
  
  return (
    <section className='services'>
      <h2>OUR SERVICES</h2>
      <div>
        <div
          className='kitchens'
          style={
            {backgroundImage: isHover ? `url(${kitchensHover})` : `url(${kitchens})`}
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></div>

        <div
          className='bedrooms'
          style={
            {backgroundImage: isHover ? `url(${bedroomsHover})` : `url(${bedrooms})`}
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></div>

        <div
          className='bathrooms'
          style={
            {backgroundImage: isHover ? `url(${bathroomsHover})` : `url(${bathrooms})`}
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></div>

        <div
          className='other'
          style={
            {backgroundImage: isHover ? `url(${otherHover})` : `url(${other})`}
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></div>
      </div>
    </section>
  );
}