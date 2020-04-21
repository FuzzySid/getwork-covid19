import React,{useEffect} from 'react';
import {Navlink, Link} from 'react-router-dom';
import M from 'materialize-css';

const Navbar=()=>{
  useEffect(()=>{
    var elems = document.querySelectorAll('.sidenav');
   M.Sidenav.init(elems, {});        
})
    return(
      <div className="navbar">
      <nav className="white" role="navigation">
          <div className="nav-wrapper container">
          
            <ul className="hide-on-med-and-down center">
               <li><Link  to="/">Home</Link></li>
              <li><Link  to="/browse/talent">Browse Talent</Link></li>
              <li><Link  to="/browse/roles">Browse Opportunities</Link></li>
            </ul>
            <ul id="nav-mobile" className="sidenav black-text">
              <li><Link  to="/">Home</Link></li>
              <li><Link to="/browse/talent">Browse Talent</Link></li>
              <li><Link  to="/browse/roles">Browse Opportunities</Link></li>
            </ul>
            <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          </div>
        </nav>
      </div>
       
    )
}

export default Navbar;