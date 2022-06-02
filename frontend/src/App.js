import React from 'react';
import {Route, Routes} from 'react-router-dom';
import TopTen from './components/useEffect/GetApiCalls'
import AddSongForm from './components/AddSongForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Hello from Spotify Frontend</h1>  

      <Routes>
        <Route exact path='/' element={<TopTen />}/>
        <Route exact path='/addsong' element={<AddSongForm />}/>
      </Routes>

    </div>
  );
}

export default App;
