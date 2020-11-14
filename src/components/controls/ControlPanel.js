import React from 'react'
import Button from './Button'
import './control-panel.css'

function ControlPanel({ play, isPlaying, duration, currentTime }) {
  //const audio = audioRef.current
  //console.log(audioRef.current.currentTime)
  return (
    <div className='control-panel'>
      <div className='timer'>{currentTime}</div>
      <Button play={play} isPlaying={isPlaying} />
      <div className='timer'>{duration}</div>
    </div>
  )
}
export default ControlPanel
