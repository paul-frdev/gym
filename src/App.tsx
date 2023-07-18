import { AboutUs } from './components/aboutUs';
import { Hero } from './components/hero';
import { Navbar } from './components/navbar';
import { Services } from './components/services';

function App() {
  return (
    <div className='text-body'>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
    </div>
  );
}

export default App;
