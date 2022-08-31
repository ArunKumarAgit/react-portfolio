import './App.css';
import Bio from './Components/Bio';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Skills from './Components/Skills';

function App() {
  return (
    <div>
      <Bio />
      <hr />
      <Experience />
      <hr />
      <Skills />
      <hr />
      <Contact />
      <hr />
    </div>
  );
}

export default App;
