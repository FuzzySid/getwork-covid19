import React,{useEfect,useState} from 'react';
import axios from 'axios';

const JobForm=()=>{
  const initState={
    company:'',
    sector:'',
    company_description:'',
    role:'',
    city:'',
    hiring:'',
    job_link:'',
    point_of_contact:''    

  }   
  const [Data,setData]=useState(initState);
  const handleChange=(e)=>{
      
      //console.log(`Setting for ${e.target.id} with ${e.target.value}`);
      setData({
          ...Data,
          [e.target.id]:e.target.value
      })
      //console.log('details',Data)
  }
  const sendData=()=>{
    //axios.post
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('Details: ',Data);
    sendData();
  }
    return(
        <div className="job-form">
        <h6 className="text-bold-extra left">Job Posting</h6>
      <p className="left">Fill out your details (all fields are required for submission). If you have multiple 
        postings you would like to add 
        you can fill out the csv template file here and email to katie@torchcapital.vc</p>
    <div className="row">
        <form className="col s12" onChange={handleChange}>
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
              <input  id="company_description" type="text" className="validate" />
              <label htmlFor="company_description">Company Description</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="role" type="text" className="validate" />
              <label htmlFor="role">Role</label>
            </div>
            <div className="input-field inline col s6">
                <div className="row">
                  <div className="col m2">
                    <label><span>Hiring</span></label>
                  </div>
                </div>
              <div className="col s12 m5">
                 
              <label>
                  <input name="group1" id="hiring" type="radio" value="intern"/>
                  <span>Intern</span>
              </label>
              </div>
             <div className="col s12 m5 ">
             <label>
                  <input name="group1" id="hiring" type="radio" value="full-time"/>
                  <span>Full-Time</span>
             </label>
             </div>
              
              </div>
            <div className="input-field col s6">
              <input id="city" type="text" className="validate" />
              <label htmlFor="city">City</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input  id="job_link" type="text" className="validate" />
              <label htmlFor="job_link">Job Posting Link</label>
            </div>
            <div className="input-field col s6">
              <input  id=" point_of_contact" type="text" className="validate" />
              <label htmlFor=" point_of_contact">Point of Contact</label>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancel</a>
      <a onClick={handleSubmit} class="modal-close waves-effect waves-green btn-flat">Submit</a>
    </div>
        </div>
    )
}

export default JobForm;