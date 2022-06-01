import React from "react";

// import {Card, CardBody, CardTitle, CardText} from "reactstrap";

const ArtistCard = ({artistDetails}) => {
    return(
        <div className="card" style={{width: '18rem', border: '4px solid', borderImageSlice: '1', borderImageSource: 'linear-gradient(to left, #00C853, #B2FF59)', background: '#6AC47E', marginLeft: '3px', marginRight:'3px'}}>
            <div className="card-body">
                <h4 className="card-title" style={{text: 'bold', color: 'white'}}>{artistDetails.artist_name}</h4>
                <p className="card-text" style={{text: 'bold', color: 'white'}}>{'Artist Avg. Rating ⭐'+artistDetails.avg_rating}</p>
                <a href={() => false} className="btn btn-success">{'Show Songs'}</a>
            </div>
        </div>
    );
}

export default ArtistCard;