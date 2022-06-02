import React from "react";
import "./addSong.css";
import {Link} from 'react-router-dom';

function AddSongForm() {
  return (
    <div className="modalBackground" style={{zIndex: '1'}}>
      <div className="modalContainer">
        <div className="titleCloseBtn">
        </div>
        <div className="title">
          <h1>Add new song here</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
          <p>The next page looks amazing. Hope you want to go there!</p>
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
          <Link to={'/'}>Cancel</Link>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default AddSongForm;