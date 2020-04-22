import React,{useEfect} from 'react';

const TalentForm=()=>{
    return(
        <div className="talent-form">
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
    )
}

export default TalentForm;