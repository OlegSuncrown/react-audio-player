import { useState, useRef } from 'react';
import './slider.css';
import './thumb.css';

function Slider() {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState('0');
  const [paddingRight, setPaddingRight] = useState('0');

  const thumbRef = useRef();

  const onChange = (e) => {
    const thumbWidth = thumbRef.current.getBoundingClientRect().width;

    const centerThumb = (thumbWidth / 100) * e.target.value * -1;

    const centerProgressBar = thumbWidth - (thumbWidth / 100) * e.target.value;

    setPosition(+e.target.value);
    setMarginLeft(centerThumb);
    setPaddingRight(centerProgressBar);
  };

  return (
    <div className='slider-container'>
      <div
        className='progress-bar-cover'
        style={{ width: `${position}%`, paddingRight: `${paddingRight}px` }}
      ></div>
      <div
        ref={thumbRef}
        className='thumb'
        style={{ left: `${position}%`, marginLeft: `${marginLeft}px` }}
      ></div>
      <input type='range' className='range' onChange={onChange} />
    </div>
  );
}

export default Slider;
