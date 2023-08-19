import FooterArea from '../../footerArea';
import './index.scss';

import GridMainLayout from '../gridMainLayout';
import { useState } from 'react';
import HeaderArea from '../../headerArea';

const MainLayout = ({ children }) => {
  
  return (
    <>
    <div className="t-main-layout">
      <HeaderArea />
      <div className="t-main-layout-content">
        <div className='t-main-layout-body'  >
          {children}
        </div>
      </div>
    </div>
    <FooterArea/>

    </>
  );
}

export default MainLayout;
