import DashLine from '../dashLine';
import './index.scss';

const TextAndDashLine = ({text}) =>{
  return (
    <div className="a-tdl-wrap">
        <div className="a-tdl-text">{text}</div>
        <DashLine />
    </div>
  );
}

export default TextAndDashLine;
