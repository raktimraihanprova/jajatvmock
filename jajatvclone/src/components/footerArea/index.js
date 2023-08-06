import { useTranslation } from 'react-i18next';
import './index.scss';
import featureLogo from '../../assets/image/jajatv_logo.png';
import EyeCatchMiddileText from '../eyeCatchMiddileText';

import FooterPlayStoreAarea from '../footerPlayStoreAarea'
import ContactUsText from '../contactUsText'

import DashLine from '../dashLine'

const FooterArea = () => {
    const { t } = useTranslation();
    return (
        <>
        <div className='o-footer-area-placeholder' />
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
                <EyeCatchMiddileText  headerText='EMAIL:' headerDescription='support@ja-ja.tv' />
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

        </div>
        </>

    );
}


export default FooterArea;
