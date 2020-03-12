import React from 'react';

function Converter() {
  return(
    <div className='converterContainer'>
      <p>Binary:</p>
      <input type='text' className='binaryInput'></input>
      <button className='bntConvert'>Convert</button>
      <p>Decimal:</p>
    </div>
  );
}

export default Converter;