import { useTranslation } from 'react-i18next';
import FbAndInstraIcon from '../fbAndInstraIcon';
import featureLogo from '../../assets/image/jajatv_logo.png'
import './index.scss';
import EyeCatchTopText from '../eyeCatchTopText';
import LanguageBlock from '../languageBlock';
import GridMainLayout from '../layouts/gridMainLayout';
import { useEffect, useState } from 'react';
const HeaderArea = () => {
  const { t } = useTranslation();
  const [showHeader, setShowHeader] = useState(false);
  const scrollhandle = () => {
    if (window.scrollY > 1200) {
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
 
  return showHeader ? ( 
    <div className="o-header-area">
      <GridMainLayout>
      <div className="o-header-area-content ">
      <img className='o-header-logo1' src={featureLogo} alt='circle' />
        <EyeCatchTopText headerText={t('jajatv')} headerDescription='Japan style book' />
        <div className='o-header-fl-wrap'>
          <div className='o-header-fl'>
            <LanguageBlock />
            <FbAndInstraIcon />
          </div>
        </div>
      </div>
      </GridMainLayout>
      </div>
  ):''
}

export default HeaderArea;