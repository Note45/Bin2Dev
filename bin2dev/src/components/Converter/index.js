import React from 'react';

import './styles.css';

function Converter() {
  return(
    <div className='converterContainer'>
      <p className='binaryText'>Binary:</p>
      <input type='text' className='binaryInput'></input>
      <p className='decimalText'>Decimal:</p>
      <p className='decimalOut'></p>
      <button className='bntConvert'>Convert</button>
    </div>
  );
}

export default Converter;