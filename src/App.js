import React from 'react';
import './App.css';
import Header from './Components/Header'
import Introduction from './Components/Introduction'
import Education from './Components/Education';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Languages from './Components/Languages';
import Hobbies from './Components/Hobbies';
function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      <Introduction />
      <Skills />
      <Languages />
      <Hobbies />
      <Footer />
    </div>
  );
}

export default App;
