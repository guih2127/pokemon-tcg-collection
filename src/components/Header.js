import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import React from "react";
import headerOptions from '../options/headerOptions';

const HeaderDiv = styled.div`
  position: fixed;
  overflow: hidden;
  padding: 10px 10px;
  display: flex;
  height: 70px;
  width: 100%;
  background-color: #FFFAF0;
`

const HeaderADiv = styled.div`
  float: left;
  color: #DC143C;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 26px;
  font-weight : 1000;
  line-height: 25px;
  border-radius: 4px;

  :hover {
      color: pink;
  }
`

const HeaderALogoDiv = styled.div`
  font-size: 25px;
  font-weight: bold;
  width: 100px;
`

const HeaderRight = styled.div`
  margin-left: auto;
  order: 2;
`
const LinkSpan = styled.div`
  color: #DC143C;

  :hover {
    color: pink;
  }
`

// TODO - REACT NAVIGATION
const Header = () => {
  
  const LoggedInOrLoggedOutHeader = () => {
    if (localStorage.getItem('token')) {
      return (
        <HeaderADiv href="/Logout">
          <Link to="/Logout">
            <LinkSpan>Logout</LinkSpan>
          </Link>
        </HeaderADiv>
      )
    } else {
      return (
        <HeaderADiv href="/Login">
          <Link to="/Login">
            <LinkSpan>Login</LinkSpan>
          </Link>
        </HeaderADiv>
      )
    }
  };

  return (
      <HeaderDiv>
        <HeaderALogoDiv href="/">
          <img style={{ 'width': '50px' }} src={'https://pngimg.com/uploads/pokeball/pokeball_PNG19.png'} alt="Pokeball" />
        </HeaderALogoDiv>
        <HeaderRight>
          {headerOptions.map((item, index) => {
            return (
              <HeaderADiv href={item.path} key={index}>
                <Link to={item.path}>
                  <LinkSpan>{item.title}</LinkSpan>
                </Link>
              </HeaderADiv>
            );
          })}
          {LoggedInOrLoggedOutHeader()} 
        </HeaderRight>
      </HeaderDiv>
  );
}

export default Header;