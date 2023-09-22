import './App.css';
import About from './Components/About';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import SkillSet from './Components/SkillSet';
import Portfolio from './Components/Portfolio'
import Footer from './Components/Footer';


function App() {
  return (
  <>
 
    <Navbar/>
  <LandingPage/>
  <About/>
  <SkillSet/>
  <Portfolio/>
  <Footer/>
  </>
  );
}

export default App;
