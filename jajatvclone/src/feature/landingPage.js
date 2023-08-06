import GridMainLayout from '../components/layouts/gridMainLayout';
import MainLayout from '../components/layouts/mainLayout';
import EyeCatchArea from '../components/eyeCatchArea';
import EyeCatchVideoArea from '../components/eyeCatchVideoArea';
import FeatureListSection from '../components/featureListSection';

const  AppLandingPage = () => {
  return (
    <MainLayout>
      <GridMainLayout>
        <EyeCatchArea />
        <EyeCatchVideoArea />
        <FeatureListSection />
      </GridMainLayout>
    </MainLayout>
  );
}

export default AppLandingPage;
