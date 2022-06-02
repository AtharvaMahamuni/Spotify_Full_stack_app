import React, {useState, useEffect} from "react";

// import {Card, CardBody, CardTitle, CardText} from "reactstrap";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const SongCard = ({songDetails}) => {

    const [artists, setArtists] = useState([]);

    const getArtists = async () => {
        const response = await fetch('http://localhost:4000/api/v1/getArtistsBySongId/'+songDetails.song_id);
        setArtists(await response.json());
        console.log(artists);
    }

    useEffect(() => {
        getArtists(); 
    }, []);

    return(
        <div className="card" style={{marginTop:'2px', width: '18rem', border: '4px solid', borderImageSlice: '1', borderImageSource: 'linear-gradient(to left, #00C853, #B2FF59)', background: '#6AC47E', marginLeft:'3px', marginRight:'3px'}}>
            <img src={'https://www.incimages.com/uploaded_files/image/1920x1080/getty_578458917_2000133020009280183_117186.jpg'} className="card-img-top" alt={'song cover image'} />
            <div className="card-body">
                <h5 className="card-title">{songDetails.song_name}</h5>
                <p className="card-text">{'Song Avg. Rating ⭐'+songDetails.avg_rating}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Relase Data: 2018-04-05</li>
            </ul>
            <div class="card-body">
                {/* <a href={() => false} className="btn btn-success" style={{marginRight:'2px'}}>{'Artists'}</a> */}

                <Popup trigger={<a href={() => false} className="btn btn-success" style={{marginRight:'2px'}}>{'Artists'}</a>} 
                    position="right center">
                        <ol>
                        {
                            artists.map((curElement) => {
                                return(
                                    <li>{curElement.artist_name}</li>
                                )
                            })
                        }
                        </ol>
                </Popup>

                <a href={() => false} className="btn btn-success" style={{marginLeft:'2px'}}>{'Give Rating'}</a>
            </div>
        </div>
    );
}

export default SongCard;