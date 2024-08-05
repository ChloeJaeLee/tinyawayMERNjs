import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWrapper = styled.div`
    background-color: black; 
    color: white; 
    width: 100%; 
    height: 7.5rem; 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
`

export const LogoBox = styled.div`
    background-size: cover; 
    background-position: center; 
    height: 100px; 
    width: 210px;
    overflow: hidden;
`

export const LinkSide = styled.div`
    display: flex; 
    align-items: center; 
    font-size: 1.125rem; 

    p {
        margin-right: 30px; 
    }

    p:hover {
        color: var(--grey1); 
    }
`

export const NavLink = styled(Link)`
    color: white; 
    text-decoration: none; 
    font-size: 1.125rem; 
    margin-right: 30px; 

    &:hover {
        color: var(--grey1); 
    }

    &.button {
        background-color: white; 
        color: var(--black); 
        padding: 10px 25px; 
        border-radius: 2rem; 
    }

    &.button:hover {
        background-color: var(--yellow); 
        color: black; 
    }
`

export const ProfileIcon = styled.div`
    background-color: var(--yellow); 
    color: var(--grey4); 
    font-size: 1.6rem;
    display: flex; 
    align-items: center;  
    padding: 10px; 
    border-radius: 2rem; 
`