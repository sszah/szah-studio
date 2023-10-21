import '../styles/index.css';
import About from '../components/About';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Services from '../components/Services';

function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hideen'>
      <About/>
      <Banner/>
      <Contact/>
      <Header/>
      <Navbar/>
      <Projects/>
      <Services/>
      <div className='h-[4000px]'></div>
    </div>
  );
}

export default App;
