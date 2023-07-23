import logo from './logo.svg';
import './App.css';
import GridMainLayout from "./layout/gridMainLayout";
import EyeCatchArea from "./component/EyeCatchArea";
import MainLayout from "./layout/mainLayout";
import EyeCatchVideos from "./component/eyeCatchVideos";
import FeatureListSection from "./component/featureListSection";

function App() {
  return (
    <div>
      <MainLayout>
        <GridMainLayout >
            <EyeCatchArea />
            <EyeCatchVideos />
            <FeatureListSection />
        </GridMainLayout>
      </MainLayout>


    </div>
  );
}

export default App;
