import React, {useState} from "react";
import { Link } from "react-router-dom";
import { addArtist } from "./helper/submit";


const AddArtistForm = () => {

    const [values, setValues] = useState({
        artist_name: "",
        dob: "",
        error: "",
        success: false
    });

    const {artist_name, dob, error, success} = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };    

    
      const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        addArtist({artist_name, dob})
          .then(data => {
            if (data.error) {
              setValues({ ...values, error: data.error, success: false });
            } else {
              setValues({
                ...values,
                artist_name: "",
                dob: "",
                success: true
              });
            }
          })
          .catch(console.log("Error in adding artist"));
      };
    

    const artistForm = () => {
        return(
            <div style={{display:'flex', justifyContent: 'center'}}>
                <form>
                <h3 style={{alignItems:'center'}}>Add artist Here</h3>
                    {/* artist_name */}
                    <div class="col" style={{width:'500px', margin: '25px'}} >
                        <label for='artist-name'>Enter the artist name</label>
                        <input 
                            type="text" id="artist-name" class="form-control" placeholder="Artist name" 
                            onChange={handleChange("artist_name")}
                            value={artist_name}
                        />
                    </div>
                    {/* dob */}
                    <div class="col" style={{width:'500px', margin: '25px'}} >
                        <label for='dob'>Enter the date of birth</label>
                        <input type="date" id='dob' class="form-control" placeholder="dob"
                        onChange={handleChange("dob")}
                        value={dob}
                        />
                    </div>
                    {/* add artist button */}
                    <div className="footer" style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
                        <Link to={'/addsong'} className='btn-danger p-1' style={{textDecoration:'none', marginLeft:'5px'}}>Back</Link>

                        <button onClick={onSubmit} type="submit" className="btn-primary" style={{marginRight:'5px'}}>Add</button>
                    </div>
                </form>
            </div>
        )
    }

    return(
        artistForm()
    );
}

export default AddArtistForm;