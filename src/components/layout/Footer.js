import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
    return (
        <FooterContainer >
            
            {/* <span style={{color: "#fff", top:"1.5rem", left:"1rem", position:"relative"}}>
                &copy;{new Date().getFullYear()} All Right Reserved.
            </span> */}
        </FooterContainer >
    )
}

export default Footer

//FOOTER CONTAINER
const FooterContainer = styled.footer`

  
    left: 0;
    bottom: 0;
    width: 100%;
`;