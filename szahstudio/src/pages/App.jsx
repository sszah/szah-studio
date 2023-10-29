import '../styles/index.css';
import About from '../components/About';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Services from '../components/Services';
import InputProject from '../components/Inputproject';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <InputProject/>
      <Navbar/>

    </div>
  );
}

export default App;
