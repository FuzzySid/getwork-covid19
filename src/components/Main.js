import React,{useEffect} from 'react';
import './Main.css';
import M from 'materialize-css';

const Main=()=>{
  useEffect(()=>{
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
    
        
})
    return(
        <div className="main">
     
        <div id="index-banner" className="parallax-container">
          <div className="section col s12 m12">
            <div className="container">
              
              <h1 className="header center teal-text text-lighten-2"></h1>
              <div className="row center">
                <h2 className="header col s12 black-text">
                We're connecting talent affected by layoffs due to Coronavirus, with employers looking to hire.</h2>
              </div>
              {/* <div className="row center">
                <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
              </div> */}
              <br /><br />
            </div>
          </div>
          {/* <div className="parallax"><img src="background1.jpg" alt="Unsplashed background img 1" /></div> */}
        </div>
        <div className="container">
          <div className="section">
            {/*   Icon Section   */}
            <div className="row">
              <div className="col s12 m6">
                <div className="icon-block">
                  {/* <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2> */}
                  <h5 className="center  black-text">For Employers</h5>
                  <br/>
                 <div className="col m6 nav-btn">
                   <button className="btn">POST A JOB</button>
                 </div>
                 <div className="col m6 nav-btn">
                   <button className="btn">BROWSE TALENT</button>
                 </div>
                </div>
              </div>
              <div className="col s12 m6 center-align">
                <div className="icon-block">
                  {/* <h2 className="center brown-text"><i className="material-icons">group</i></h2> */}
                  <h5 className="center black-text">For Talent</h5>
                  <br/>
                  <div className="col m6 nav-btn">
                   <button className="btn">ADD YOURSELF</button>
                 </div>
                 <div className="col m6 nav-btn">
                   <button className="btn">BROWSE OPEN ROLES</button>
                 </div>
                </div>
              </div>
         
            </div>
          </div>
        </div>
              <div className="container pref-footer">
              <h6>
              This is a free resource for everyone. Any questions, comments, or collaboration opportunities please 
              send us an email. Please share this platform with those who can benefit.
              </h6>
              </div>
              

            
        </div>
    )
}

export default Main;