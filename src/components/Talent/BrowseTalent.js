import React,{useEffect,useState} from 'react';
import './BrowseTalent.css';
import M from 'materialize-css';
import TalentForm from '../Forms/TalentForm';
import axios from 'axios';


const BrowseTalent=()=>{
    let [data,setData]=useState([]);
    let tableData=[];

    useEffect(()=>{
      
      const fetchData=async()=>{
        
        let arr=[];
       const result=await axios.get('http://3.14.202.69:8000/get_talent_profile')
          .then(res=>{
          console.log('res from talent: ',res.data.data);
          res.data.data.forEach(resData=>{
            arr.push(resData);
          })
         
          })
          .catch(err=>{
            console.log(err);
          })
          console.log('arr: ',arr);
         
          setData(arr)
        }
        fetchData();
      },[])
      useEffect(()=>{
        var elems = document.querySelectorAll('.modal');
      M.Modal.init(elems, {});
      })
  if(data.length>0){
          //console.log('data: ',arr,'type of ',typeof(arr));
          data.forEach(el=>{
            console.log('el: ',el)
            tableData.push(
               <tr>
                  <td>{el.createdAt}</td>
                  <td>{el.name}</td>
                  <td>{el.is_student}</td>
                  <td>{el.college_name}</td>
                  <td>{el.specialization}</td>
                  <td>-</td>
                  <td>{el.company_sector}</td>
                  <td>{el.role}</td>
                  <td>{el.city}</td>
                  <td>{el.is_relocation}</td>
                  <td>{el.email}</td>
                  <td>{el.linkedin_url}</td>
                  {/* <td>9891100201</td> */}
                </tr>
                
            )
          })
        }
  if(data.length>0)
  console.log('Data: ',data);
  console.log('table data: ',tableData);
  if(tableData.length==0) return (<div>Loading...</div>)
  else
  return(
     
        <div className="browse_talent">
        {/* <button onClick={()=>{console.log(data)}}></button> */}
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
              <th>Company</th>
              <th>Sector</th>
              <th>Role/Title</th>
              <th>City</th>
              <th>Open to Relocating?</th>
              <th>Email</th>
              <th>Linked URL/Resume</th>
              {/* <th>Phone</th> */}
          </tr>
        </thead>

        <tbody>
    
          {tableData}
          
        </tbody>
      </table>
            </div>

  <div id="add-talent" class="modal">
    <div class="modal-content">
      <TalentForm></TalentForm>
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