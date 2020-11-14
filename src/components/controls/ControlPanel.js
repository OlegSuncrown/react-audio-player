import React from 'react'
import Button from './Button'
import './control-panel.css'

function ControlPanel({ play, isPlaying }) {
  return (
    <div className='control-panel'>
      <div className='timer'>00:00</div>
      <Button play={play} isPlaying={isPlaying} />
      <div className='timer'>03:50</div>
    </div>
  )
}
export default ControlPanel
