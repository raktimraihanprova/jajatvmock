import "./index.scss";

const EyeCatchTopText = ({headerText, headerDesc}) => {
    return(
      <div className= "a-ecct-wrap">
          <h2 className="a-ecct-header">{headerText}</h2>
          <span className= "a-ecct-header-desc">{headerDesc}</span>
      </div>
    );
}

export default EyeCatchTopText;