import './index.scss';

const EyeCatchTopText = ({headerText, headerDescription}) =>{
  return (
    <div className="a-ectt-wrap">
        <h2 className="a-ectt-header">{headerText}</h2>
        <span className="a-ectt-header-desc"> {headerDescription} </span>
    </div>
  );
}

export default EyeCatchTopText;
