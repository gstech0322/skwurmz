import React, { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

function AmountSlider () {

  const [ value, setValue ] = useState(0); 

  return (
    <div>
    <RangeSlider
      value={value}
      onChange={changeEvent => setValue(changeEvent.target.value)}
      min={1}
      max={20}
    />
    <p>{value}</p>
    </div>
  );

}

export default AmountSlider;