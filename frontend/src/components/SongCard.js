import React from "react";

// import {Card, CardBody, CardTitle, CardText} from "reactstrap";

const SongCard = ({songDetails}) => {
    return(
        <div className="card" style={{marginTop:'10px', width: '18rem', border: '4px solid', borderImageSlice: '1', borderImageSource: 'linear-gradient(to left, #00C853, #B2FF59)', background: '#6AC47E'}}>
            <img src={'https://www.incimages.com/uploaded_files/image/1920x1080/getty_578458917_2000133020009280183_117186.jpg'} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Tum hi ho</h5>
                <p className="card-text">{'Artist Avg. Rating ⭐5'}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Relase Data: 2018-04-05</li>
            </ul>
            <div class="card-body">
                <a href={() => false} className="btn btn-success" style={{marginRight:'2px'}}>{'Artists'}</a>
                <a href={() => false} className="btn btn-success" style={{marginLeft:'2px'}}>{'Give Rating'}</a>
            </div>
        </div>
    );
}

export default SongCard;