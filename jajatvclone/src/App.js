import GridMainLayout from './components/layouts/gridMainLayout';
import MainLayout from './components/layouts/mainLayout';
import EyeCatchArea from './components/eyeCatchArea/index';
import './scss/common.scss';
import EyeCatchVideoArea from './components/eyeCatchVideoArea';
import FeatureListSection from './components/featureListSection';
import   AndMoreSection from './components/andMoreArea'
import FooterArea from './components/footerArea';
function App() {
  return (
    <MainLayout>
      <GridMainLayout>
        <EyeCatchArea />
        <EyeCatchVideoArea />
        <FeatureListSection />
        <AndMoreSection/>
      </GridMainLayout>
    </MainLayout>
  );
}

export default App;
