
import styles from './App.module.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Navbar } from './components/Navbar/Navbar';

import { Hero } from './components/Hero/Hero';

import { Projects } from './components/Projects/Projects';
function App(){
  return (
       <div className={styles.App}>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Navbar/>
        </div>
        
  )
}

export default App
