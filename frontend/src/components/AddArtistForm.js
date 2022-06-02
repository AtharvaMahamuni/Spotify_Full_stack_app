import React from "react";
import { Link } from "react-router-dom";

const AddArtistForm = () => {
    return(
        <div style={{display:'flex', justifyContent: 'center'}}>
            <form>
            <h3 style={{alignItems:'center'}}>Add artist Here</h3>
                <div class="col" style={{width:'500px', margin: '25px'}} >
                    <label for='artist-name'>Enter the artist name</label>
                    <input type="text" id="artist-name" class="form-control" placeholder="Artist name" />
                </div>
                <div class="col" style={{width:'500px', margin: '25px'}} >
                    <label for='dob'>Enter the date of birth</label>
                    <input type="date" id='dob' class="form-control" placeholder="dob"/>
                </div>
                <div className="footer" style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
                    <Link to={'/addsong'} className='btn-danger p-1' style={{textDecoration:'none', marginLeft:'5px'}}>Cancel</Link>
                    <button className="btn-primary" style={{marginRight:'5px'}}>Add</button>
                </div>
               
            </form>
        </div>
    )
}

export default AddArtistForm;