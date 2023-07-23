import "./index.scss";
import EyeCatchTopText from "../EyeCatchTopText";
import TextAndDashLine from "../textAndDashLine";
import featureLogo from "../../assets/image/jajatv_logo.png"
import moon from "../../assets/image/jajatv_moon.png"
import PlayStoreArea from "../../layout/playStoreArea";
import EyeCatchMiddleText from "../eyeCatchMiddleText";
import FbAndInstaIcon from "../../layout/fbAndInstaIcon";
import InnerGridLine from "../../layout/innerGridLine";

const EyeCatchArea = () => {
    return(
        <div className="o-eyecatch-area">
            <div className="o-eyecatch-section-1">
                <EyeCatchTopText headerText={"JAJA TV"} headerDesc={"Japan style book"} />
                <div className="o-eyecatch-fl">
                    <TextAndDashLine text={"Language"}></TextAndDashLine>
                    <TextAndDashLine text={"Follow us on"}></TextAndDashLine>
                </div>
            </div>
            <img className='o-eyecatch-feature-logo' src={featureLogo} alt='circle' />
            <h1 className='o-eyecatch-feature-text' >JAJA TV</h1>
            <img className='o-eyecatch-moon' src={moon} alt='circle' />

            <div className="o-eyecatch-section-2">
                <div className="o-eyecatch-dd">
                    <PlayStoreArea />
                    <EyeCatchMiddleText headerText= "Discover Japan" description="JAJA TV は、人々の身近な「ディープ」を配信 するストーリーブックです。" />
                </div>
            </div>
            <FbAndInstaIcon />
            <InnerGridLine />






        </div>
    )
}

export default EyeCatchArea;