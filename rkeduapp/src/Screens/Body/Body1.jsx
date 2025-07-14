import React from 'react';
import Carosel from '../../Components/Carosels/Carosel';
import '../Body/Body1.css';
import Quesry from '../../Components/Quesry/Quesry';

const Body1 = () => {
  return (
    <>
      <div className='BodyMain'>
        <div className='CaroselContainer'>
          <Carosel />
        </div>

        <div className='LoginContainer'>
          <Quesry/>
        </div>
      </div>
    </>
  );
};

export default Body1;
