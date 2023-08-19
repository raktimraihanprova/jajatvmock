import InnerGridLine from '../layouts/innerGridLine';
import './index.scss';
import FeatureItem from './featureItem';
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
    title: `TV CHANNELS`,
    subTitle: `A full line-up of Japan’ s top TV programs and deep information brought to you by Japan’ s TV people`,
    url: `https://s3-ap-northeast-1.amazonaws.com/liquid-prod-video/ui_2.mp4`,
    desc: `You can watch various programs such as gourmet in Tokyo, night life in Osaka, and foreigner special channel for living in Japan.`,

  },
  {
    id: `03`,
    title: `MATCH-UP WITH GUIDES`,
    subTitle: `Match-up with users who will guide you around your area and enjoy cross-cultural communication with the locals`,
    url: `https://s3-ap-northeast-1.amazonaws.com/liquid-prod-video/ui_3.mp4`,
    desc: `Find the perfect guide through the match-up videos from our official professional guides, or look for guides around your area.`,

  },
  {
    id: `04`,
    title: `Q&A`,
    subTitle: `Freely ask questions to app users from around the world`,
    url: `https://s3-ap-northeast-1.amazonaws.com/liquid-prod-video/ui_3.mp4`,
    desc: `“What’ s trending in Japan now?” “Any restaurant recommendations?” Whether it’ s something you want to find out before your trip, or if you’ re having trouble while on the go, just ask away!`,

  },
  {
    id: `05`,
    title: `CREATE YOUR ORIGINAL STORY BOOK`,
    subTitle: `Introduce your recommended plans for sightseeing and outings of areas you like`,
    url: `https://s3-ap-northeast-1.amazonaws.com/liquid-prod-video/ui_5.mp4`,
    desc: `Create your very own story book showcasing your favorite shops, places and food.`,

  }
]

const FeatureListSection = () => {
  return (
    <div className="o-feature-list-area">
      <InnerGridLine />
      {
        featureList.map((feture, index) => <FeatureItem key={index} feture={feture} />)
      }
    </div>
  );
}

export default FeatureListSection;
