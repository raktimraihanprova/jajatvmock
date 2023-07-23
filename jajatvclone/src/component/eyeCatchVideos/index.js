import "./index.scss";
import InnerGridLine from "../../layout/innerGridLine";
import EyeCatchMiddleText from "../eyeCatchMiddleText";

const EyeCatchVideos = () => {
    return(
        <div className="o-eyecatch-video-area">
            <InnerGridLine/>
            <div className= "o-eyecatch-video-section">
                <video controls={true} src='https://s3-ap-northeast-1.amazonaws.com/liquid-prod-video/main.mp4' />
            </div>
            <EyeCatchMiddleText headerText='WHAT IS JAJA TV ?' description='ガイドブックも、現地の人との出会いも、便利なクーポンもアプリひとつで。今までの常識を超えるテレビ体験' />
        </div>
    )
}
export default EyeCatchVideos;