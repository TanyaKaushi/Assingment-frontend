import React from 'react'
import styled from 'styled-components';
import eclipse from '../../img/user.png'

const Header = () => {
    return (
        < MainContainer>
          <nav class="navbar ">
<div class="dropdown" style={{marginLeft:"78%",  display: "inline-block", marginTop:"10px",}}>
  <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Admin
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
<img className = 'c1' src={eclipse} style={{marginLeft:"85%", marginTop:"-40px", display: 'inline-block', height: "40px"}}/>
</nav>
        </ MainContainer>

    )
}

export default Header

//MAIN CONTAINER
const MainContainer = styled.header`
    // background: url(../../images/1.JPEG)no-repeat center/cover;
    // height: 25rem;

    // h1 {
    //     transform: translate(-50%, -50%);
    //     color:  #1D2951 ;
    //     font-weight:900;
    //     position: absolute;
    //     top: 30%;
    //     left: 30%;

    }
    `;