import './index.scss';
import { useEffect, useRef, useState } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import  playbutton  from '../../assets/image/play.svg'

import pausebutton from '../../assets/image/pause.svg'

const MainMoviePlayer = ({ url }) => {

  const [isPaused, sterIsPaused] = useState(false)
  const [percentage, setPercentage] = useState(0);
  const playerEl = useRef()

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: .4
  }

  const callbackFunction = entries => {
    const [entry] = entries
    console.log(entry, playerEl.current)
    if (playerEl.current) {
      if(entry.isIntersecting){
        if(playerEl.current.paused){
          playerEl.current.play();
        }
      }
      else{
        console.log(playerEl.current.paused)
        if(!playerEl.current.paused){
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

      if(!playerEl.current.paused){
        playerEl.current.pause();
      }
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
        <video loop={true} ref={playerEl} muted={true}  width='100%' src={url}
        // onTimeUpdate={(e) => setPercentage(0 + (e.currentTarget.currentTime*100/e.currentTarget.duration))}
        />

        <div className='playPauseBar'>
        <CircularProgressbar value= {percentage}  />
        <div className='playPauseButton'> 
              <img src={ isPaused ? playbutton: pausebutton}  onClick={ () =>togglePause()} height='20px' width='20px' />
        
          </div>
      </div>

      </div>
      </div>


  );
}

export default MainMoviePlayer;
