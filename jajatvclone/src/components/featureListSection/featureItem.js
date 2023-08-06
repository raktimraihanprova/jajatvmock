import './index.scss';
import subVideoShade from '../../assets/image/sub_video_shade.png';
import mobileShade from '../../assets/image/mobile.svg';
import MoviePlayer from '../moviePlayer';
import DashLine from '../dashLine';

const FeatureItem = (props) => {
  const { feture } = props;
  return (<div className='o-feature-list-item'>
    <div className='o-feature-list-item-bg-image'>
      <img src={subVideoShade} alt='feature bg image' />
      <DashLine />
    </div>
    <div className='o-feature-list-item-mobile-image'>
      <img src={mobileShade} alt='feature mobile image' />
      <MoviePlayer url ={feture.url} loop />
    </div>
    <div className='o-feature-list-item-text-content'>
      <div className='o-feature-list-item-count'> {feture.id} </div>
      <div className='o-feature-list-item-title'>{feture.title}</div>
      <div className='o-feature-list-item-sub-title'>{feture.subTitle}</div>
      <div className='o-feature-list-item-desc'>{feture.desc}</div>
    </div>
  </div> 
  );
}

export default FeatureItem;
