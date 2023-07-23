import "./index.scss"

const TextAndDashLine = ({text}) => {
    return(
        <div className= "a-tdl-wrap">
            <div className= "a-tdl-text">{text}</div>
            <div className="a-tdl-dash" />

        </div>
    )
}

export default TextAndDashLine;