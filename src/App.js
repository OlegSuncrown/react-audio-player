import { useState, useRef } from 'react'
import song from './Suncrown - Legend of the Forgotten Centuries.mp3'

import Slider from './components/slider/Slider'
import ControlPanel from './components/controls/ControlPanel'

function App() {
  const [percentage, setPercentage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioRef = useRef()

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime /// 60

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
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
    const audio = audioRef.current
    setPercentage(e.target.value)
    audio.currentTime = (audio.duration / 100) * e.target.value
  }

  return (
    <div className='app-container'>
      <h1>Audio Player</h1>
      <Slider percentage={percentage} onChange={onChange} />
      <audio
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}
        src={song}
      ></audio>
      <ControlPanel
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
      />
    </div>
  )
}

export default App
