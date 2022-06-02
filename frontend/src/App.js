import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import TopTen from './components/useEffect/GetApiCalls'
import AddSongForm from './components/AddSongForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddArtistForm from './components/AddArtistForm';

function App() {

  return (
    <div className="App">
      <h1>Spotify Frontend</h1>  

      <Routes>
        <Route exact path='/' element={<TopTen />}/>
        <Route exact path='/addsong' element={<AddSongForm />}/>
        <Route exact path='/addartist' element={<AddArtistForm />}/>
      </Routes>

    </div>
  );
}

export default App;
