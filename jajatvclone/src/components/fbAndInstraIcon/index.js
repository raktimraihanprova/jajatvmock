import './index.scss';
import instarIcon from '../../assets/image/instagram_icon.svg'
import fbIcon from '../../assets/image/fb_icon.svg'

import LinkIcon from '../linkIcon';
import CONSTANT from '../../constant';
const { fbPage, instragramPage } = CONSTANT
const FbAndInstraIcon = () => {
  return (
    <div className="m-fii-wrap">
      <LinkIcon link={fbPage} iconSrc={fbIcon}  />
      <LinkIcon link={instragramPage} iconSrc={instarIcon}  />
    </div>
  );
}

export default FbAndInstraIcon;
