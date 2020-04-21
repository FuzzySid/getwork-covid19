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
                    <div className="col m4 s12 float-left">
                        <a className="btn modal-trigger" href="#add-talent">Add Yourself</a>
                    </div>
                    <div className="col m4 s12 center-align">
                        <h5 className="">Talent Affected by Covid19</h5>
                    </div>
                    <div className="col m4 s12 float-right">
                    <div class="nav-wrapper">
                            <form>
                                <div class="input-field">
                                <input id="search" type="search" placeholder="Search for jobs by status" required/>
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
              <th>name</th>
              <th>status</th>
              <th>Specialization/Title</th>
              <th>Sector</th>
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

                   <div id="add-talent" class="modal">
    <div class="modal-content">
    <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input  id="name" type="text" className="validate" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field col s6">
              <input id="status" type="text" className="validate" />
              <label htmlFor="status">status</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input  id="college-name" type="text" className="validate" />
              <label htmlFor="college-name">College Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="Specialization" type="password" className="validate" />
              <label htmlFor="Specialization">Specialization</label>
            </div>
          
            <div className="input-field col s6">
              <input id="Sector" type="text" className="validate" />
              <label htmlFor="Sector">Sector</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input  id="Role" type="text" className="validate" />
              <label htmlFor="Role">Job Posting Link</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input  id="Location" type="text" className="validate" />
              <label htmlFor="Location">Location</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input  id="relocate" type="text" className="validate" />
              <label htmlFor="relocate">Open to relocating?</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input  id="resume" type="text" className="validate" />
              <label htmlFor="resume">LinkedIn URL/Resume</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input  id="email" type="text" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input  id="Phone" type="number" className="validate" />
              <label htmlFor="Phone">Phone No.</label>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancel</a>
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Submit</a>
    </div>
  </div>
        </div>
    )
}

export default BrowseTalent;