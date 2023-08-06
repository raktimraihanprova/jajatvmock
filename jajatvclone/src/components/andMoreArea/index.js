import './index.scss';
import subVideoShade from '../../assets/image/sub_video_shade.png';
import mobileShade from '../../assets/image/mobile.svg';
import MoviePlayer from '../moviePlayer';
import DashLine from '../dashLine';
import search from '../../assets/image/search.svg';
import coupon from '../../assets/image/coupon.svg';
import navigation from '../../assets/image/navigation.svg';
import calendar from '../../assets/image/calendar.svg';
import InnerGridLine from '../layouts/innerGridLine';

const AndMoreSection = (props) => {
  const  feture  = {
    id: `03`,
    title: `MATCH-UP WITH GUIDES`,
    subTitle: `Match-up with users who will guide you around your area and enjoy cross-cultural communication with the locals`,
    url: `https://s3-ap-northeast-1.amazonaws.com/liquid-prod-video/ui_3.mp4`,
    desc: `Find the perfect guide through the match-up videos from our official professional guides, or look for guides around your area.`,

  }
  return ( <div className="o-ffeature-list-area">
     <InnerGridLine />
  <h5 className='o-ffeature-list-item-bg-image-of'> other funcitons</h5>
      <h1 className='o-ffeature-list-item-bg-image-am'>And more</h1>
  <div className='o-ffeature-list-item'>
  
    <div className='o-ffeature-list-item-bg-image'>
      
      <img src={subVideoShade} alt='ffeature bg image' />
      <DashLine />

      
    </div>
    {/* <div className='o-ffeature-list-item-mobile-image'>
      <img src={mobileShade} alt='feature mobile image' />
      <MoviePlayer url ={feture.url} loop />
    </div> */}
    <div className='o-ffeature-list-item-text-content1'>

      {/* <div className='o-ffeature-list-item-count'> {feture.id} </div> */}
      
      <img className='o-ffeature-list-item-fi' src={search} alt='scroll icon' />
      <div className='o-ffeature-list-item-title'> SEARCH</div>
      <div className='o-ffeature-list-item-sub-title'>Local search / filtered search</div>
      <div className='o-ffeature-list-item-desc'>Find the perfect guides and spots - whether you’re on the go or even beforehand.</div>

      <img className='o-ffeature-list-item-fi1' src={coupon} alt='scroll icon' />
      <div className='o-ffeature-list-item-title'> COUPON</div>
      <div className='o-ffeature-list-item-sub-title'>Discount coupons</div>
      <div className='o-ffeature-list-item-desc'>We have a wide range of coupons : restaurants, cafes, variety stores and sightseeing spots. You can even make reservations from the app itself!</div>

    </div>

    <div className='o-ffeature-list-item-text-content'>
    <img className='o-ffeature-list-item-fi' src={navigation} alt='scroll icon' />
      <div className='o-ffeature-list-item-title'> NAVIGATION</div>
      <div className='o-ffeature-list-item-sub-title'>Route guide</div>
      <div className='o-ffeature-list-item-desc'>Leave all the navigating to our app! You’ll be in good hands even in unfamiliar areas.</div>

      <img className='o-ffeature-list-item-fi2' src={calendar} alt='scroll icon' />
      <div className='o-ffeature-list-item-title'> CALENDAR</div>
      <div className='o-ffeature-list-item-sub-title'>Schedule management</div>
      <div className='o-ffeature-list-item-desc'>Keep track of your schedule, guides and reservations all  within the app’ s calendar.</div>

    </div>

  </div>
  </div>
  );

}

export default AndMoreSection