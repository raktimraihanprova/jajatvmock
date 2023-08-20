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
        for(let i = 1; i<= 30; i++){
            thresholdArr.push(i/30)
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
            footerBgEl.current.style.transform = `translateY(${-500*entry.intersectionRatio}px)`
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
                <img className='o-eyecatch-feature-logo-footer' src={featureLogo} alt='circle' />
                <img className="footer-line-img" src="../../assets/image/dashline.png" alt />
            </div>

            <div className='o-footer-middleGrid'>
                <small className='o-footer-middleGrid-txtSmall' >Smartphone App</small>
                <p className="jajatv-footer">JAJA TV</p>
                <p className="free-coupon-footer">Download app and get coupon free!</p>
                <img className="footer-line-img" src="../../assets/image/dashline.png" alt />
                <p className="sm-app-footer-email-title">Email:</p>
                <p className="sm-app-footer-email">support@ja-ja.tv</p>
                <p className="sm-app-footer-copy-right">Copyright©2019 ARCHECO INC. All Rights Reserved.</p>
            </div>

            <div className='o-footer-sideGrid' >
                <FooterPlayStoreAarea />
                <img className="footer-line-img" src="../../assets/image/dashline.png" alt />
                <ContactUsText />
            </div  >
            <div className='o-footer-area-bg-img' ref={footerBgEl} />

        </div>
        </>

    );
}


export default FooterArea;
