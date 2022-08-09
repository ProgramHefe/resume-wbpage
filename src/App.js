import React from 'react';
import './App.css';
import Header from './Components/Header'
import Introduction from './Components/Introduction'
import Education from './Components/Education';
function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      <Introduction />
      
    </div>
  );
}

export default App;
