import "./index.scss";

const EyeCatchMiddleText = ({headerText, description}) => {
    return(
        <div className="a-ecmt-wrap">
            <h1 className= "a-ecmt-header">{headerText}</h1>
            <p className= "a-ecmt-header-desc">{description}</p>
        </div>
    )
};

export default EyeCatchMiddleText;