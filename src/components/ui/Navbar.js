import React from 'react';
import {Navlink, Link} from 'react-router-dom';

const Navbar=()=>{
    return(
        <nav className="white" role="navigation">
          <div className="nav-wrapper container">
          
            <ul className="hide-on-med-and-down center">
               <li><Link className="black-text" to="/">Home</Link></li>
              <li><Link className="black-text" to="/browse/talent">Browse Talent</Link></li>
              <li><Link className="black-text" to="/browse/roles">Browse Opportunities</Link></li>
            </ul>
            <ul id="nav-mobile" className="sidenav black-text">
              <li><Link className="black-text" to="/">Home</Link></li>
              <li><Link className="black-text" to="/browse/talent">Browse Talent</Link></li>
              <li><Link className="black-text" to="/browse/roles">Browse Opportunities</Link></li>
            </ul>
            <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          </div>
        </nav>
    )
}

export default Navbar;