import './index.scss';

const EyeCatchMiddileText = ({headerText, headerDescription}) =>{
  return (
    <div className="a-ecmt-wrap">
        <h1 className="a-ecmt-header">{headerText}</h1>
        <p className="a-ecmt-header-desc"> {headerDescription} </p>
    </div>
  );
}

export default EyeCatchMiddileText;
