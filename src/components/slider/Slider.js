import { useState, useRef, useEffect } from 'react'
import './slider.css'
import './thumb.css'

function Slider({ percentage = 0, onChange }) {
  const [position, setPosition] = useState(0)
  const [marginLeft, setMarginLeft] = useState('0')
  const [paddingRight, setPaddingRight] = useState('0')

  const thumbRef = useRef()

  useEffect(() => {
    let val = percentage

    const thumbWidth = thumbRef.current.getBoundingClientRect().width

    const centerThumb = (thumbWidth / 100) * val * -1

    const centerProgressBar = thumbWidth - (thumbWidth / 100) * val

    setPosition(+val)
    setMarginLeft(centerThumb)
    setPaddingRight(centerProgressBar)
  }, [percentage])

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
      {/* <input type='range'  value={percentage} /> */}
      <input type='range' className='range' value={position} onChange={onChange} />
    </div>
  )
}

export default Slider
