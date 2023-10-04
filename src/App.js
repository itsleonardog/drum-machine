import React, { useEffect, useState } from 'react';
import './App.css';

const audioURLs = {
  Q: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  W: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  E: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  A: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  S: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  D: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  Z: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  X: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  C: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
};

function App() {
  const [activeKey, setActiveKey] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function handleKeyDown(event) {
    const key = event.key.toUpperCase();
    if (audioURLs[key]) {
      playSound(key);
    }
  }

  function playSound(selector) {
    const audioElement = document.getElementById(selector);
    if (audioElement) {
      audioElement.play();
      setActiveKey(selector);
    }
  }

  return (
    <div className="App">
      <div id='drum-machine'>
        <div id="display">Key selected: {activeKey}</div>
        <div className='drum-pads'>
          {Object.keys(audioURLs).map((key) => (
            <div
              key={key}
              onClick={() => {
                playSound(key);
              }}
              className='drum-pad'
              id={audioURLs[key]}
            >
              {key}
              <audio
                className='clip'
                id={key}
                src={audioURLs[key]}
              ></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
