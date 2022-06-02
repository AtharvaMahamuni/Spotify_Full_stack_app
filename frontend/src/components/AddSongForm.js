import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

function AddSongForm() {

  const songForm = () => {
    return(
      <div className="addSongForm" style={{display:'flex', justifyContent:'center'}}>
        <form>
        <h3 style={{alignItems: 'center'}}>Add song Here</h3>
        <div class="col" style={{width:'500px', margin: '25px'}} >
          <label for='song-name'>Enter the song name</label>
          <input type="text" id="song-name" class="form-control" placeholder="Song name" />
        </div>
        <div class="col" style={{width:'500px', margin: '25px'}} >
          <label for='date-pick'>Enter the release date</label>
          <input type="date" id='date-pick' class="form-control" placeholder="Release date"/>
        </div>
        <div>
        <label className="form-label select-label" for='artist-select'>Select Artists</label>
        <br/>
        <select className="select" id="artist-select" multiple data-mdb-placeholder="Example placeholder" style={{width:'500px'}}>
          {
            artists.map((curElement) => {
              return(
                <option>{curElement.artist_name}</option>
              )
            })
          }
        </select>     
        </div>
        <div style={{padding: '5px', margin: '20px'}}>
            <Link to={'/addartist'} className='btn-success' style={{textDecoration:'none', padding: '5px'}}>Add New Artists</Link>
        </div>
        <div className="col" style={{width:'500px', margin: '25px'}} >
          <label for='file-pick'>Add the cover image</label>
          <input type="file" id='date-pick' class="form-control" placeholder="Release date"/>
        </div>
        <div className="footer" style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
          <Link to={'/'} className='btn-danger p-1' style={{textDecoration:'none', marginLeft:'5px'}}>Cancel</Link>
          <button className="btn-primary" type="submit" style={{marginRight:'5px'}}>Add</button>
        </div>
        </form>
      </div>
    )
  }

  const [artists, setArtists] = useState([])

  const getArtists = async () => {
    const response = await fetch('http://localhost:4000/api/v1/getAllArtists');
    setArtists(await response.json());
  }

  useEffect( () => {
    getArtists();
  }, []);

  return (
    songForm()
  );
}

export default AddSongForm;