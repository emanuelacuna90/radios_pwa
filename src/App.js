import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './assets/css/style.css'

import PobreJhony from './assets/image/3e84df_5b00f131394cc16054df79e9e77df66e.webp';
import Cadena3 from './assets/image/cadena3.webp';
import Gamba from './assets/image/gamba.png'

const App = () => {

  return (
    <div className='container'>
      <div className='radios'>
        <div className='radio1'>
              <img src={PobreJhony} alt='Pobre Johnny'/>
                <ReactAudioPlayer
                src="https://stream4.suenas.net/pobrejohnny"
                  controls
                />
          </div>
          <div className='radio2'>
            <img src={Cadena3} alt='Cadena 3'/>
                <ReactAudioPlayer
                  src="https://18743.live.streamtheworld.com/CADENA3.mp3"
                  controls
                  />
          </div>
          <div className='radio3'>
            <img src={Gamba} alt='Cadena 3'/>
                <ReactAudioPlayer
                  src="https://servidor1.hostradios.com:8132/stream"
                  controls
                  />
          </div>
      </div>
    </div>
  )
}

export default App
