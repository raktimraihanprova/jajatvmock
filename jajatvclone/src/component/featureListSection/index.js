import InnerGridLine from '../../layout/innerGridLine';
import './index.scss';
import subVideoShade from '../../assets/image/sub_video_shade.png';
import mobileShade from '../../assets/image/mobile.svg';

const featureList = [
    {
        id: `01`,
        title: `STORY BOOK`,
        subTitle: `Watch as locals introduce you to the deeper parts of Japan through videos - an experience not found in any guidebook`,
        url: `https://s3-ap-northeast-1.amazonaws.com/liquid-prod-video/ui_1.mp4`,
        desc: `Story books are plans for outings and sightseeing recommended by users familiar with the area. You can check out the spots listed, reserve places and even obtain discount coupons!`,

    },
    {
        id: `02`,
        title: `STORY BOOK　２`,
        subTitle: `Watch as locals introduce you to the deeper parts of Japan through videos - an experience not found in any guidebook`,
        url: `https://s3-ap-northeast-1.amazonaws.com/liquid-prod-video/ui_1.mp4`,
        desc: `Story books are plans for outings and sightseeing recommended by users familiar with the area. You can check out the spots listed, reserve places and even obtain discount coupons!`,

    },
    {
        id: `03`,
        title: `STORY BOOK　３`,
        subTitle: `Watch as locals introduce you to the deeper parts of Japan through videos - an experience not found in any guidebook`,
        url: `https://s3-ap-northeast-1.amazonaws.com/liquid-prod-video/ui_1.mp4`,
        desc: `Story books are plans for outings and sightseeing recommended by users familiar with the area. You can check out the spots listed, reserve places and even obtain discount coupons!`,

    },
    {
        id: `04`,
        title: `STORY BOOK`,
        subTitle: `Watch as locals introduce you to the deeper parts of Japan through videos - an experience not found in any guidebook`,
        url: `https://s3-ap-northeast-1.amazonaws.com/liquid-prod-video/ui_1.mp4`,
        desc: `Story books are plans for outings and sightseeing recommended by users familiar with the area. You can check out the spots listed, reserve places and even obtain discount coupons!`,

    }
]

const FeatureListSection = () => {
    return (
        <div className="o-feature-list-area">
            {
                featureList.map((feture, index) => (
                    <div className='o-feature-list-item' key={index}>
                        <div className='o-feature-list-item-bg-image'>
                            <img src={subVideoShade} alt='feature bg image' />
                        </div>
                        <div className='o-feature-list-item-mobile-image'>
                            <img src={mobileShade} alt='feature mobile image' />
                            <video controls={true} src={feture.url} />
                        </div>
                        <div className='o-feature-list-item-text-content'>
                            <div className='o-feature-list-item-count'> {feture.id} </div>
                            <div className='o-feature-list-item-title'>{feture.title}</div>
                            <div className='o-feature-list-item-sub-title'>{feture.subTitle}</div>
                            <div className='o-feature-list-item-desc'>{feture.desc}</div>
                        </div>
                    </div>
                ))
            }

            <InnerGridLine />
        </div>
    );
}

export default FeatureListSection;