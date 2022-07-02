import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
const Nav = styled.div`
 background-color: black;
  color: white;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-b
  &:hover {
    background-color: lightblue;
  }
`

const Navbar = () => {
    return (
        <Nav>

            <div>  <Link to='/' > home </Link></div>
            <div> <Link to='/user/edit/:id' > </Link></div>
            <div><Link to='/user/:id' > </Link></div>
            <div><Link to='/user/add' > Add </Link></div>

        </Nav>
    )
}

export default Navbar