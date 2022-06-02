import React, {useEffect, useState} from "react";
import SongCard from "../SongCard";
import ArtistCard from "../ArtistCard";
// import backend from '../../backend';
import PopUpArtist from "./PopUpArtist";

const TopTen = () => {

    const [songs, setSongs] = useState([]);
    const [artists, setArtists] = useState([]);

    const getSongs = async () => {
        const response = await fetch('http://localhost:4000/api/v1/getTopTenSongs');
        setSongs(await response.json());
        // console.log(data);
    }

    const getArtists = async () => {
        const response = await fetch('http://localhost:4000/api/v1/getTopTenArtists');
        setArtists(await response.json());
    }

    useEffect(() => {
        getSongs();
        getArtists();    
    }, []);

    return(
        <div>
            <PopUpArtist />
            <div className="container-fluid">
                <h1 className="mt-5">Top 10 Songs</h1>
                <p className="subtitle">
                    Choosen by users rating
                </p>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">             
                
                {/* <div className="container-fluid mt-5"> */}
                    <div className="row text-center">
                        {
                            songs.map((curElement) => {
                                return(
                                    <SongCard songDetails={curElement}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <h1 className="mt-5">Top 10 Artists</h1>
                <p className="subtitle">
                    Choosen by users rating
                </p>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">             
                    <div className="row text-center">
                        {
                            artists.map((curElement) => {
                                return(
                                    <ArtistCard artistDetails={curElement}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopTen;