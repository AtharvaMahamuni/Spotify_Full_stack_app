import React from 'react';
import TopTen from './components/useEffect/GetApiCalls'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Hello from Spotify Frontend</h1>  
      <TopTen />
    </div>
  );
}

export default App;
