import React,{useEffect} from 'react';
import './BrowseRoles.css';
import M from 'materialize-css';

const BrowseRoles=()=>{
    useEffect(()=>{
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {});
        
            
    })
    return(
               <div className="browse_roles">
            <div className="title-box">
                <div className="row">
                    <div className="col m4 s12 float-left">
                        <a className="btn modal-trigger" href="#job-post">Post a Job</a>
                    </div>
                    <div className="col m4 s12 center-align">
                        <h5 className="">Talent Affected by Covid19</h5>
                    </div>
                    <div className="col m4 s12 float-right">
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
          <tr className="field-names">
              <th>Date Posted</th>
              <th>Company</th>
              <th>Company Sector</th>
              <th>Company Description</th>
              <th>Role/Title</th>
              <th>Hiring</th>
              <th>Location</th>
              <th>Point of Contact</th>
              <th>Job Description Link</th>
          </tr>
        </thead>

        <tbody>
          <tr>
             <td>1/2/19</td>
            <td>Gintech</td>
            <td>IT</td>
            <td>blah blah blah</td>
            <td>Data Analyst</td>
            <td>Intern</td>
            <td>Amsterdam</td>
            <td>-</td>
            <td>tempurl.com</td>
           
          </tr>
        
        </tbody>
      </table>
            </div>
        <div id="job-post" class="modal">
    <div class="modal-content">
    <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input  id="company" type="text" className="validate" />
              <label htmlFor="company">Company</label>
            </div>
            <div className="input-field col s6">
              <input id="sector" type="text" className="validate" />
              <label htmlFor="sector">Sector</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input  id="company-description" type="text" className="validate" />
              <label htmlFor="company-description">Company Description</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="Role" type="password" className="validate" />
              <label htmlFor="Role">Role</label>
            </div>
          
            <div className="input-field col s6">
              <input id="city" type="text" className="validate" />
              <label htmlFor="city">City</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input  id="job-link" type="text" className="validate" />
              <label htmlFor="job-link">Job Posting Link</label>
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

export default BrowseRoles;