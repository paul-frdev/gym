import { AboutUs } from './components/aboutUs';
import { Blog } from './components/blog';
import { Footer } from './components/footer';
import { Hero } from './components/hero';
import { Navbar } from './components/navbar';
import { Pricing } from './components/pricing';
import { Services } from './components/services';
import { Trainers } from './components/trainers';

function App() {
  return (
    <div className='text-body'>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Trainers />
      <Pricing />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
