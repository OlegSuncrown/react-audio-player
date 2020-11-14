import { useState, useRef } from 'react'
import song from './Suncrown - Legend of the Forgotten Centuries.mp3'

import Slider from './components/slider/Slider'
import ControlPanel from './components/controls/ControlPanel'

function App() {
  const [percentage, setPercentage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef()

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    setPercentage(+percent)
  }

  const play = () => {
    const audio = audioRef.current
    audio.volume = 0.1
    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }
    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  const onChange = (e) => {
    setPercentage(e.target.value)
    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * e.target.value
  }

  return (
    <div className='app-container'>
      <h1>Audio Player</h1>
      <Slider percentage={percentage} onChange={onChange} />
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => {
          getCurrDuration(e)
        }}
        src={song}
      ></audio>
      <ControlPanel play={play} isPlaying={isPlaying} />
      {/* <button onClick={() => play()}>Play</button> */}
    </div>
  )
}

export default App
