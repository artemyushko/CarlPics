import React from 'react';
import { DummyData } from '../assets/DummyData';
import '../css/root.css';

function Image() {

    return (
      <>
        <div>
            <img src={DummyData[0].pictures[0].picture} alt="1986 Carleton Competitive Yodeling Team" width="600" height="400" />;
        </div>
      </>
    );
  }
  
  export default Image;