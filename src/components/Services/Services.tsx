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
  const [isKitchenHover, setIsKitchenHover] = useState(false);
  const [isBedroomsHover, setIsBedroomsHover] = useState(false);
  const [isBathroomsHover, setIsbathroomsHover] = useState(false);
  const [isOtherHover, setIsOtherHover] = useState(false);

  const handleMouseEnterKitchen = () => {
     setIsKitchenHover(true);
  };

  const handleMouseLeaveKitchen = () => {
     setIsKitchenHover(false);
  };
  
  const handleMouseEnterBedrooms = () => {
    setIsBedroomsHover(true);
  };

 const handleMouseLeaveBedrooms = () => {
    setIsBedroomsHover(false);
 };

 
 const handleMouseEnterBathrooms = () => {
  setIsbathroomsHover(true);
};

const handleMouseLeaveBathrooms = () => {
  setIsbathroomsHover(false);
};

const handleMouseEnterOther = () => {
  setIsOtherHover(true);
};

const handleMouseLeaveOther = () => {
  setIsOtherHover(false);
};
  
  return (
    <section className='services'>
      <h2>OUR SERVICES</h2>
      <div>
        <div
          className='kitchens'
          style={
            {backgroundImage: isKitchenHover ? `url(${kitchensHover})` : `url(${kitchens})`}
          }
          onMouseEnter={handleMouseEnterKitchen}
          onMouseLeave={handleMouseLeaveKitchen}
        ></div>

        <div
          className='bedrooms'
          style={
            {backgroundImage: isBedroomsHover ? `url(${bedroomsHover})` : `url(${bedrooms})`}
          }
          onMouseEnter={handleMouseEnterBedrooms}
          onMouseLeave={handleMouseLeaveBedrooms}
        ></div>

        <div
          className='bathrooms'
          style={
            {backgroundImage: isBathroomsHover ? `url(${bathroomsHover})` : `url(${bathrooms})`}
          }
          onMouseEnter={handleMouseEnterBathrooms}
          onMouseLeave={handleMouseLeaveBathrooms}
        ></div>

        <div
          className='other'
          style={
            {backgroundImage: isOtherHover ? `url(${otherHover})` : `url(${other})`}
          }
          onMouseEnter={handleMouseEnterOther}
          onMouseLeave={handleMouseLeaveOther}
        ></div>
      </div>
    </section>
  );
}