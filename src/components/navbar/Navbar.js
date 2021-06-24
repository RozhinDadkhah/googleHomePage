import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

function Navbar() {
    return (
        <Nav>
            <LeftLinks>
                <NavLinks to='/about'>About</NavLinks>
                <NavLinks to='/store'>Store</NavLinks>
            </LeftLinks>
            <RightLinks>
                <NavLinks to='/gmail'>Gmail</NavLinks>
                <NavLinks to='/images'>Images</NavLinks>
                <AppLinks to='/' >
                    <AppsIcon />
                </AppLinks>
                <Avatar />
            </RightLinks>
        </Nav>
    )
}

export default Navbar


const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:16px;
    height:60px;
    border-bottom:1px solid lightgray;
`

const LeftLinks = styled.div`
    padding:10px;
    margin-left:10px;
`

const RightLinks = styled.div`
    padding:10px;
    margin-right:16px;
    display:flex;
    align-items:center;
`

const NavLinks = styled(Link)`
    padding:0 8px;
    text-decoration:none;
    color:#000;

    &:hover{
        border-bottom:1px solid black;
    }
`
const AppLinks = styled(Link)`
    color:#ACA4A4;
    margin-right:5px;
    padding:5px 8px;
    text-decoration:none;

    &:hover{
        background-color:#E8E4E4;
        border-radius:50%;
    }
`