import {useState, useEffect } from 'react';
import {Container, Row, Col} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import Axios from "axios";
import ArtistCard from './components/ArtistCard';
import SongCard from './components/SongCard';

import './App.css';



function App() {
  const [details, setDetails] = useState({});

  const fetchDetails = async() => {
    const {data} = await Axios.get("https://randomuser.me/api/");
    console.log("Response: ", data)

    const details = data.results[0];

    setDetails(details)

  }

  useEffect(() => {
    fetchDetails();
  }, []);


  return (
    <div className="App">
      <h1>Hello from Spotify Frontend</h1>    
        {/* <Container fluid className='p-4 bg-primary App'>
          <Row>
            <Col md={4} className="offset-md-4 mt-4">
              <ArtistCard details={details}/>
            </Col>
          </Row>
        </Container>   */}
        <ArtistCard />
        <SongCard />
    </div>
  );
}

export default App;
