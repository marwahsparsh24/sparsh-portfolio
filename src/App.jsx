import MainLayout from './components/MainLayout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white scroll-smooth">
      <MainLayout>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </MainLayout>
    </div>
  );
}

export default App;
