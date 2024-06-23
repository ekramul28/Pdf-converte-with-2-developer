
import Banner from './banner/Banner';
import ServiceCount from '@/app/components/ui/ServiceCount/ServiceCount';
import Testimonial from './components/testimonial/Testimonial';
import Services from './services/page';
import Benefits from './components/Benefits/Benefits';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServiceCount />
      <Testimonial></Testimonial>
      <Benefits></Benefits>
      <Services></Services>
    </div>
  );
};

export default Home;