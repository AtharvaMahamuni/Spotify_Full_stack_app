import React, {useState, useEffect} from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// import {Card, CardBody, CardTitle, CardText} from "reactstrap";

const ArtistCard = ({artistDetails}) => {

    const [songs, setSongs] = useState([]);

    const getSongs = async () => {
        const response = await fetch('http://localhost:4000/api/v1/getSongsByArtistId/'+artistDetails.artist_id);
        setSongs(await response.json());
        // console.log(songs)
        // console.log(data);
    }

    useEffect(() => {
        getSongs();
    }, []);

    return(
        <div className="card" style={{width: '18rem', border: '4px solid', borderImageSlice: '1', borderImageSource: 'linear-gradient(to left, #00C853, #B2FF59)', background: '#6AC47E', marginLeft: '3px', marginRight:'3px'}}>
            <div className="card-body">
                <h4 className="card-title" style={{text: 'bold', color: 'white'}}>{artistDetails.artist_name}</h4>
                <p className="card-text" style={{text: 'bold', color: 'white'}}>{'Artist Avg. Rating ⭐'+artistDetails.avg_rating}</p>

                <Popup trigger={<a href={() => false} className="btn btn-success">{'Show Songs'}</a>} 
                    position="right center">
                        <ol>
                        {
                            songs.map((curElement) => {
                                return(
                                    <li>{curElement.song_name}</li>
                                )
                            })
                        }
                        </ol>
                </Popup>
            </div>
        </div>
    );
}

export default ArtistCard;