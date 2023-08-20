import ScrollButton from '../../scrollButton';
import './index.scss';
import InnerGridLine from "../innerGridLine";

const GridMainLayout = ({ children }) => {
  return (
    <div className="t-grid-main-layout">
        
      <div className="t-grid-main-layout-side" />
      <div className="t-grid-main-layout-middle" >
        {children}
        <ScrollButton />
      </div>
      <div className="t-grid-main-layout-side" />
    </div>
  );
}

export default GridMainLayout;
