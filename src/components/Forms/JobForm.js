import React,{useEfect} from 'react';

const JobForm=()=>{
    return(
        <div className="job-form">
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
    )
}

export default JobForm;