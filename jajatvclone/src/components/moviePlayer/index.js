import {useEffect, useRef, useState} from 'react';

const MoviePlayer = ({ url }) => {
  const playerEl = useRef()
  const [percentage, setPercentage] = useState(0);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  const callbackFunction = entries => {
    const [entry] = entries
    let playerElObj = playerEl.current;
    if (playerElObj) {
      if (entry.isIntersecting) {
        if(!playerEl.current.isPlaying){
          playerEl.current.play();
        }
      } else {
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



  return (<video loop ref={playerEl} muted={true} src={url} />
  )
}

export default MoviePlayer;
