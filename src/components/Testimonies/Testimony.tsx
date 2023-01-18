import React, { useCallback, useState } from 'react';
import './Testimony.scss';

import rightArrow from '../../media/right-arrow.png';

const reviews = [
  {
    p: 'lorem ipsum lkore hhgdb dshhh slongab hshggs band he oa ddd hbradle tada',
    name: 'Bradley Matjie'
  },
  {
    p: 'Lorem ipsum dolor sit ametconsectetur adipisicing elit. Cum,alias eaque? Eveniet libero debitis',
    name: 'John Luke'
  },
  {
    p: 'alias eaque? Eveniet libero debitis ab aspernatur consectetur doloribus',
    name: 'Peter Pan'
  }
];

export const Testimony: React.FC = () => {
  const [count, setCount] = useState(0);
  const [Testimonies] = useState(reviews);

  const handleClick = useCallback(() => {
    setCount((prevValue): number => {
      if (count < Testimonies.length - 1) {
        return prevValue + 1;
      }
      return prevValue = 0;
    });
  }, [count, Testimonies.length]);
  
  return (
    <section className='testimonies'>
      <div>
        <p>{Testimonies[count].p}</p>
        <h3>- {Testimonies[count].name}</h3>
      </div>
      <img
        src={rightArrow}
        alt="next arrow icon"
        onClick={handleClick}
      />
    </section>
  );
}