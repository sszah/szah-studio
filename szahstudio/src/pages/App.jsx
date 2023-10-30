import '../styles/index.css';
import About from '../components/About';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Tools from '../components/Tools';
import Review from '../components/Review';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Tools/>
      <Projects/>
      <Review/>
      <Contact/>
      <Navbar/>
    </div>
  );
}

export default App;
