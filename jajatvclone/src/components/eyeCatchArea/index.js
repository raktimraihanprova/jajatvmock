import { useTranslation } from 'react-i18next';
import EyeCatchMiddileText from '../eyeCatchMiddileText';
import FbAndInstraIcon from '../fbAndInstraIcon';
import InnerGridLine from '../layouts/innerGridLine';
import TextAndDashLine from '../textAndDashLine';
import jajatvMoon from '../../assets/image/jajatv_moon.png'
import featureLogo from '../../assets/image/jajatv_logo.png'
import './index.scss';
import EyeCatchTopText from '../eyeCatchTopText';
import PlayStoreAarea from '../playStoreAarea';
import LanguageBlock from '../languageBlock';
import { useEffect, useState } from 'react';
const EyeCatchArea = () => {
  const { t } = useTranslation();

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
 

  return (
    <div className="o-eyecatch-area">
      <div className='o-eyecatch-section-1'>
        <EyeCatchTopText headerText={t('jajatv')} headerDescription='Japan style book' />
        <div className='o-eyecatch-fl-wrap'>
          <div className='o-eyecatch-fl'>
            <TextAndDashLine text='Language' />
            <TextAndDashLine text='Follow us on' />
          </div>
          <div className='o-eyecatch-fl'>
            <LanguageBlock />
            <FbAndInstraIcon />
          </div>
        </div>
      </div>
      <img className='o-eyecatch-feature-logo' src={featureLogo} alt='circle' />

      {showHeader &&  
      <h1 className='o-eyecatch-feature-text' >JAJA TV</h1>
}
      <img className='o-eyecatch-moon' src={jajatvMoon} alt='circle' />
      <div className='o-eyecatch-section-2'>
        <div className='o-eyecatch-dd'>
          <PlayStoreAarea />
          <EyeCatchMiddileText headerText= {t('DISCOVER_JAPAN')}  headerDescription={t('ecmt-header-desc')} />
        </div>
      </div>
      
      <InnerGridLine />
    </div>
  );
}

export default EyeCatchArea;
