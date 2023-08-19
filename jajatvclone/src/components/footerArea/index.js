import { useTranslation } from 'react-i18next';
import './index.scss';
import featureLogo from '../../assets/image/jajatv_logo.png';
import EyeCatchMiddileText from '../eyeCatchMiddileText';

import FooterPlayStoreAarea from '../footerPlayStoreAarea'
import ContactUsText from '../contactUsText'

import DashLine from '../dashLine'
import { useEffect, useRef } from 'react';

const FooterArea = () => {
    const { t } = useTranslation();
    const footerPlaceHolderEl = useRef()
    const footerBgEl = useRef()
    const generateThreshold = () =>{
        let thresholdArr = [];
        for(let i = 1; i<= 60; i++){
            thresholdArr.push(i/60)
        }
        return thresholdArr;
    }
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: generateThreshold()
    }
    const callbackFunction = entries => {
        entries.forEach((entry) => {
            footerBgEl.current.style.transform = `translateY(${-45.5*entry.intersectionRatio}vh)`
          });
      }
        useEffect(() => {
            const observer = new IntersectionObserver(callbackFunction, options)
            observer.observe(footerPlaceHolderEl.current)
            return () => {
              if (footerPlaceHolderEl.current) observer.unobserve(footerPlaceHolderEl.current)
            }
          }, [])

    return (
        <>
        <div className='o-footer-area-placeholder' ref={footerPlaceHolderEl} />
        <div className='o-footer-area' >
            <div className='o-footer-area-bg' />

            <div className='o-footer-noContent-Grid'></div>
            <div className='o-footer-sideGrid'>
            
                <img className='o-eyecatch-feature-logo' src={featureLogo} alt='circle' />
                <div className='o-footer-dl'>
                    <DashLine />
                </div>
            </div>

            <div className='o-footer-middleGrid'>
                <small className='o-footer-middleGrid-txtSmall' >Smartphone App</small>
                <EyeCatchMiddileText headerText='JAJA TV' headerDescription={t('footer-download-text')} />

                <div className='o-footer-dl'>
                    <DashLine />
                </div>

                <div className='o-footer-middleGrid-email' >
                <EyeCatchMiddileText  headerText='Email:' headerDescription='support@ja-ja.tv' />
                </div>

               <div className='o-footer-middleGrid-cr'>
               <small className='o-footer-middleGrid-txtSmall'>Copyright©2019 ARCHECO INC. All Rights Reserved.</small>
               </div>

            </div>

            <div className='o-footer-sideGrid' >
                <FooterPlayStoreAarea />
                <div className='o-footer-dl'>
                    <DashLine />
                </div>
                <ContactUsText />
            </div  >
            <div className='o-footer-area-bg-img' ref={footerBgEl} />

        </div>
        </>

    );
}


export default FooterArea;
