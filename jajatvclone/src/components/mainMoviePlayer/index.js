import './index.scss';
import { useEffect, useRef, useState } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import  playbutton  from '../../assets/image/play.svg'

import pausebutton from '../../assets/image/pause.svg'

const MainMoviePlayer = ({ url }) => {

  const [isPaused, sterIsPaused] = useState(false)

  const playerEl = useRef()

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }

  const callbackFunction = entries => {
    const [entry] = entries
    let playerElObj = playerEl.current;
    if (playerElObj) {
      if(entry.isIntersecting){
        if(!playerEl.current.isPlaying){
          playerEl.current.play();
        }
      }else{
        if(playerEl.current.isPlaying){
          playerEl.current.pause();
        }
      }
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    const currentTarget = playerEl.current
    if (currentTarget) observer.observe(currentTarget)
    return () => {
      if (currentTarget) observer.unobserve(currentTarget)
    }
  }, [])


  function togglePause(){
    if(!isPaused){
      playerEl.current.pause();
      sterIsPaused(!isPaused)

    } else if (isPaused){
      playerEl.current.play();
      sterIsPaused(!isPaused)
    }
  }

  return (
    <div className="m-movie-player-wrap">
      <div className="m-movie-player"  >
        <video ref={playerEl} muted={true}  width='100%' src={url} />

        <div className='playPauseBar'>
        <CircularProgressbar value='0'  />;
        <div className='playPauseButton'> 
              <img src={ isPaused ? playbutton: pausebutton}  onClick={togglePause} height='20px' width='20px' />
        
          </div>
      </div>

      </div>
      </div>


  );
}

export default MainMoviePlayer;
