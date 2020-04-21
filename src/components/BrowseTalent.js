import React,{useEffect} from 'react';
import './BrowseTalent.css';
import M from 'materialize-css';

const BrowseTalent=()=>{
    useEffect(()=>{
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {});
        
            
    })
    return(
        <div className="browse_talent">
            <div className=" title-box">
                <div className="row">
                    <div className="col s4 float-left">
                        <a className="btn modal-trigger" href="#modal1">Add Yourself</a>
                    </div>
                    <div className="col s4 center-align">
                        <h5 className="">Talent Affected by Covid19</h5>
                    </div>
                    <div className="col s4 float-right">
                    <div class="nav-wrapper">
                            <form>
                                <div class="input-field">
                                <input id="search" type="search" placeholder="Search for jobs by sector" required/>
                                <label class="label-icon" for="search"><i class="material-icons">search</i>

                                </label>
                                <i class="material-icons">close</i>
                                </div>
                            </form>
                            </div>
                    </div>
                    
                   
                    
                </div>
                
            </div>
            <div className="table container">
            <table className="responsive">
        <thead>
          <tr>
              <th>Date Added</th>
              <th>Name</th>
              <th>I'm Studying/Working</th>
              <th>College Name</th>
              <th>Specialization</th>
              <th>Company</th>
              <th>Sector</th>
              <th>Role/Title</th>
              <th>City</th>
              <th>Open to Relocating?</th>
              <th>Linked URL/Resume</th>
              <th>Email</th>
              <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1/2/19</td>
            <td>Harry</td>
            <td>Student</td>
            <td>AISCT</td>
            <td>Computer Networks</td>
            <td>-</td>
            <td>IT</td>
            <td>-</td>
            <td>Hamburg</td>
            <td>Yes</td>
            <td>tempurl.com</td>
            <td>abc@gmail.com</td>
            <td>9891100201</td>
          </tr>
          
        </tbody>
      </table>
            </div>

            <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
        </div>
    )
}

export default BrowseTalent;