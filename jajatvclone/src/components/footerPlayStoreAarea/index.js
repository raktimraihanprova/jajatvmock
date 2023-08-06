import LinkIcon from '../linkIcon';
import './index.scss';
import { useEffect, useState } from 'react';
import appleStoreButton from '../../assets/image/appStore.svg';
import andoridStoreButton from '../../assets/image/playStore.svg';

import CONSTANT from '../../constant';
const { androidStore, appleStore } = CONSTANT;
const FooterPlayStoreAarea = () => {

  return   (
    <div className="m-play-store-area">
      <h1 className="m-play-store-text">Download App for FREE</h1>
      <div className="m-play-store-buttons">
        <LinkIcon link={appleStore} iconSrc={appleStoreButton} />
        <LinkIcon link={androidStore} iconSrc={andoridStoreButton} />
      </div>
    </div>
  );
}

export default FooterPlayStoreAarea;
