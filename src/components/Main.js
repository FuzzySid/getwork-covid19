import React from 'react';
import './Main.css';


const Main=()=>{
    return(
        <div className="main">
     
        <div id="index-banner" className="parallax-container">
          <div className="section col s12 m12">
            <div className="container">
              
              <h1 className="header center teal-text text-lighten-2"></h1>
              <div className="row center">
                <h3 className="header col s12 black-text">
                We're connecting talent affected by layoffs due to Coronavirus, with employers looking to hire.</h3>
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
                  <h5 className="center">For Employers</h5>
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
                  <h5 className="center">For Talent</h5>
                  <br/>
                  <div className="col m6 nav-btn">
                   <button className="btn">ADD YOURSELF</button>
                 </div>
                 <div className="col m6 nav-btn">
                   <button className="btn">BROWSE OPEN ROLES</button>
                 </div>
                </div>
              </div>
              {/* <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                  <h5 className="center">Easy to work with</h5>
                  <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
              </div>
            </div>
          </div>
          <div className="parallax"><img src="background2.jpg" alt="Unsplashed background img 2" /></div>
        </div> */}
   

            
        </div>
    )
}

export default Main;