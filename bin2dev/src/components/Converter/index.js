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

  function checkInputBinary() {
    let binaryInput = document.getElementsByClassName('binaryInput')[0]

    if((binaryInput.value[binaryInput.value.length - 1] != 1) && (binaryInput.value[binaryInput.value.length - 1] != 0)) {
      binaryInput.value = binaryInput.value.slice(0, -1);
    }
  }

  return(
    <div className='converterContainer'>
      <p className='binaryText'>Binary:</p>
      <input type='number' className='binaryInput' onKeyUp={checkInputBinary}></input>
      <p className='decimalText'>Decimal:</p>
      <p className='decimalOut'></p>
      <button className='bntConvert' onClick={renderConvert}>Convert</button>
    </div>
  );
}

export default Converter;