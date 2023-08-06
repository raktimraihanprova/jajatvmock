import './index.scss';
import scrollIcon from '../../assets/image/scroll.png';

import { useEffect, useState } from 'react';

const ScrollButton = () => {


  const [showHeader, setShowHeader] = useState(false);
  const scrollhandle = () => {
    if (window.scrollY < 5000) {
      !showHeader && setShowHeader(true)
    } else {
      showHeader && setShowHeader(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', scrollhandle)

    return () => { 
      window.removeEventListener('scroll', scrollhandle);
    }
  })
  const handelScrollButton = () => {
    console.log('scroll button pressed');
    window.scrollTo(
      {
        top: window.scrollY + window.innerHeight,
        behavior: 'smooth'
      });
  }
  return showHeader ? (
    <div className="a-scroll-button" onClick={() => handelScrollButton()}>
      <img src={scrollIcon} alt='scroll icon' />
      
    </div>
  ):'';
}

export default ScrollButton;
