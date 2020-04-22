import React,{useEffect} from 'react';
import './Main.css';
import M from 'materialize-css';
import {Link} from 'react-router-dom';
// import M from 'materialize-css';
import Footer from './ui/Footer';

const Main=()=>{
  useEffect(()=>{
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
    // M.FormSelect.init(elems, {});
        
})
    return(
        <div className="main">
     
        <div id="index-banner" className="container">
         
        
          <div class="row">
              <div class="col s12 m12">
                <div class="main-text">
                 <h2 className="text-bold-extra">GetWork's Covid 19 Initiative</h2>
              
                 <h4 className="text-bold">We're connecting talent affected by layoffs due to Coronavirus, with employers looking to hire.</h4>


                </div>
              </div>
      </div>
        </div>
        <br/>
            <div class="row container">
        <div class="col s12 m6 btn-big-box container">
          <div className="row">
          <span class="card-title">For Employers</span>
          </div>
          <div className="row">
            <div className="col s12 m6 btn-box">
            <a class="modal-trigger big-btn btn" href="#job-post">
              <span class="main-btn-text">POST A JOB</span>
              </a>
            </div>
            <div className="col s12 m6 btn-box">
            <Link to="/browse/talent" className="big-btn btn" >
            <span class="main-btn-text">BROWSE TALENT</span>
            </Link>
            </div>
          </div>
        
        </div>
        <div class="col s12 m6 btn-big-box container">
          <div className="row">
          <span class="card-title">For Talent</span>
          </div>
          <div className="row">
            <div className="col s12 m6 btn-box">
            <a href="#add-talent" className="modal-trigger big-btn btn">
              <span class="main-btn-text">ADD YOURSELF</span>
              </a>
            </div>
            <div className="col s12 m6 btn-box">
            <Link to="/browse/roles" className="big-btn btn" >
              <span class="main-btn-text">BROWSE OPEN ROLES</span>
            </Link>
            </div>
          </div>
        
        </div>
     
      </div>  
                
  <div id="job-post" class="modal">
    <div class="modal-content">
      <h6 className="text-bold-extra left">Job Posting</h6>
      <p className="left">Fill out your details (all fields are required for submission). If you have multiple 
        postings you would like to add 
        you can fill out the csv template file here and email to katie@torchcapital.vc</p>
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

  <div id="add-talent" class="modal">
    <div class="modal-content">
    <h6 className="text-bold-extra left">Add your details
      
    </h6>

      <p className="left"> &nbsp; (All fields are mandatory)</p>
    <div className="row">
      
        <form className="col s12">
          <div className="row">
            <div className="input-field inline col s6">
              <input  id="name" type="text" className="validate" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field inline col s6">
            <div className="col s6">
            <label>
                <input name="group1" type="radio" />
                <span>Working</span>
            </label>
            </div>
           <div className="col s6 inline-field">
           <label>
                <input name="group1" type="radio"/>
                <span>Student</span>
           </label>
           </div>
            
            </div>
          </div>
          <div className="row">
            <div className="input-field inline col s12">
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
            <div className="input-field col s12 m6">
              <input  id="Role" type="text" className="validate" />
              <label htmlFor="Role">Job Posting Link</label>
            </div>
         
            <div className="input-field col s12 m6">
              <input  id="Location" type="text" className="validate" />
              <label htmlFor="Location">Location</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
            <label>
                <input type="checkbox" class="filled-in" />
                <span>Open to relocating?</span>
            </label>
              
            </div>
         
            <div className="input-field col s6">
                    <div class="file-field input-field">
                    <div class="btn">
                        <span>LinkedIn URL/Resume</span>
                        <input type="file"/>
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text"/>
                    </div>
                </div>
           
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input  id="email" type="text" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
         
            <div className="input-field col s6">
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
              <div className="container pref-footer">
              <h6>
              This is a free resource for everyone. Any questions, comments, or collaboration opportunities please 
              send us an email. Please share this platform with those who can benefit.
              </h6>
              </div>
              
            <div className="social-icons">
              {/* <ul>
              <li><a href="" class="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="Instragram">
                    <i class="fab fa-instagram"></i>
                </a></li>
                <li><a href="" class="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="Facebook">
                        <i class="fab fa-facebook"></i>
                    </a></li>
                <li><a href="" class="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="Twitter">
                    <i class="fab fa-twitter"></i>
                </a></li>
              </ul> */}
            </div>
        </div>
        
    )
}

export default Main;