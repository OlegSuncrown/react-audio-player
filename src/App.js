import { useState, useRef } from 'react';
import Slider from './components/slider/Slider';
import song from './Suncrown - Legend of the Forgotten Centuries.mp3'

function App() {
  const [percentage, setPercentage] = useState(0);
  const audioRef = useRef();

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime  / e.currentTarget.duration) * 100).toFixed(0);
    setPercentage(+percent);
  }

  const play = () => {
    const audio = audioRef.current;
    audio.volume = 0.1
    audio.play();
  }
 
  const onChange = (e) => {
    setPercentage(e.target.value)
    const audio = audioRef.current;
    audio.currentTime = audio.duration/100 * e.target.value
  };

  return (
    <div className="app-container">
      <h1>Player</h1>
      <Slider 
        percentage={percentage} 
        setPercentage={setPercentage}
        onChange = {onChange}
      />
      <audio ref={audioRef} onTimeUpdate={(e) => {
        getCurrDuration(e)
     
      }} 
        src={song}>
      
      </audio>
      <button onClick={() => play()}>Play</button>
    </div>
  );
}

export default App;
