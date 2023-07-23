import "./index.scss";
import instarIcon from '../../assets/image/instagram_icon.svg'
import fbIcon from '../../assets/image/fb_icon.svg'
import LinkIcon from "../linkIcon";

const FbAndInstaIcon = () => {
    return(
        <div className="m-fill-wrap">
            <LinkIcon link="#" iconSrc={fbIcon} />
            <LinkIcon link="#" iconSrc={instarIcon} />
        </div>
    )
}

export default FbAndInstaIcon;