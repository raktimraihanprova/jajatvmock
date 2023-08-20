import { useTranslation } from 'react-i18next';
import MainMoviePlayer from '../mainMoviePlayer';
import EyeCatchMiddileText from '../eyeCatchMiddileText';
import InnerGridLine from '../layouts/innerGridLine';
import './index.scss';
import DashLine from '../dashLine';

import  PlayPauseButton from '../PlayPauseButton'

import  playbutton  from '../../assets/image/play.svg'

const EyeCatchVideoArea = () => {
  const { t } = useTranslation();
  
  return (
    <div className="o-eyecatch-video-area">
      <InnerGridLine />
      <div className='o-eyecatch-video-section'>
        <MainMoviePlayer url='https://s3-ap-northeast-1.amazonaws.com/liquid-prod-video/main.mp4' />
        
        <DashLine />
        <div className='o-eyecatch-video-section-ppa'>  

        </div>
      </div>
      {/*<EyeCatchMiddileText headerText='WHAT IS JAJA TV ?' headerDescription={t('jajatv-description')} />*/}
        <div className="a-ecm-wrap">
            <h1 className="a-ecm-header">WHAT IS JAJA TV ?</h1>
            <p className="a-ecm-header-desc"> JAJA TV combines guidebooks, local matchups and convenient coupons into a single app. Come experience TV like never before! </p>
        </div>



    </div>
  );
}

export default EyeCatchVideoArea;
