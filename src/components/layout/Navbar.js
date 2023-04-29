import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import logo from '../../logo.png';

export const Navbar = () => {
    return (
        <NavbarContaier>
            {/* <nav className="navbar navbar-expand-lg navbar-light px-5 py-0" >
   
           

    <ul className="navbar-nav ml-auto" >
        <li className="nav-item active">
          <Link  className="nav-link active" aria-current="page" to="/"> Home</Link >
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/add-item"><button type="button" class="btn btn-primary">Add Article</button></Link >
        </li>
      </ul>
</nav> */}

</NavbarContaier>
    )
};

export default Navbar;

//MAIN NAVBAR CONTAINER
const NavbarContaier = styled.div`
    


    
`;
 