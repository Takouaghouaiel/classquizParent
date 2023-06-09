import React from "react";
import { Box } from '@mui/material';
import styled from '@emotion/styled'
import logo from "../images/classquiz.png";
const Header = () => {

    const StyleHeader = styled(Box)(({ theme }) => (
        {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 400,
            
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          
        }
    ));


    return (
        
        <StyleHeader >
            <img src={logo} alt="logo" width="330px"  />
      
        </StyleHeader>
    )
}

export default Header