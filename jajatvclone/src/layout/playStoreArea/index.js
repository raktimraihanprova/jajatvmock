import "./index.scss";
import LinkIcon from "../linkIcon";
import appleStoreIcon from "../../assets/image/appStore.svg";
import androidStore from "../../assets/image/playStore.svg";

const PlayStoreArea = () => {
    return(
        <div className="m-play-store-area">
            <div className="m-play-store-text">Download App for FREE</div>
            <div className="m-play-store-buttons">
                <LinkIcon link={"#"} iconSrc={appleStoreIcon} />
                <LinkIcon link={"#"} iconSrc={androidStore} />
            </div>
        </div>
    )
}

export default PlayStoreArea;