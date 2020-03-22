import React from 'react';

import './styles.css';

function Converter() {
  function convertToDecimal() {
    let binaryValue = document.getElementsByClassName('binaryInput')[0].value
    return parseInt(binaryValue, 2)
  }

  function renderConvert() {
    let decimalOut = convertToDecimal()

    let textElementOut = document.getElementsByClassName('decimalOut')[0]
    textElementOut.innerHTML = decimalOut
  }

  return(
    <div className='converterContainer'>
      <p className='binaryText'>Binary:</p>
      <input type='number' className='binaryInput'></input>
      <p className='decimalText'>Decimal:</p>
      <p className='decimalOut'></p>
      <button className='bntConvert' onClick={renderConvert}>Convert</button>
    </div>
  );
}

export default Converter;