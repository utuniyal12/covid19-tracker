import React from 'react';
import Counter from './components/Counter'
import './App.css';
import './styles/landing.css'
import News from './components/News'

function App() {
  return (
    <div className="App">
      <h1>COVID-19 TRACKER</h1>
      <Counter/>
      <News/>
    </div>
  );
}

export default App;
