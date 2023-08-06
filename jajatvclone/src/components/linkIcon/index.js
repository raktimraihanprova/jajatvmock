import './index.scss';
const LinkIcon = ({ link, iconSrc }) => {
  return (
      <a href={link} className='a-link'>
        <img src={iconSrc} alt='icon' />
      </a>
  );
}

export default LinkIcon;
