import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Feature';
import Footer from '../components/Footer';
import About from '../components/About';
import Contact from '../components/Contact';
import ReviewPage from '../components/ReviewPage';
const  Home = ()=> {
  return (
    <div>
    <Navbar/>
      <Hero />
      <div id='about'>
        <About/>

      </div>
      <Features />
      <div>
        <Contact/>
      </div>
      <div id = "testimonials">
        <ReviewPage/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;