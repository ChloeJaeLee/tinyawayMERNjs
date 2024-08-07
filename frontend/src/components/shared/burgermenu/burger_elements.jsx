import styled from "styled-components";
import { Link } from "react-router-dom";

export const BurgerWrapper = styled.div`
    font-size: 4rem;
    background-color: white; 
    color: var(--grey3); 
    height: 100vh; 
    width: 25%; 
    align-items: end; 
    position: absolute; 
    right: 0px; 
    top: 0px; 
    z-index: 2; 

    p {
        font-size: 1.3125rem; 
        font-family: 'Source Sans 3'; 
        color: var(--grey3);    
        margin-top: 15px; 
    }
`

export const OptionsWrapper = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: end; 
    margin-top: 60px; 
    margin-right: 50px; 
`

export const MenuOption = styled(Link)`
    color: var(--grey3); 
    font-size: 1.3125rem; 
    font-family: 'Source Sans 3'; 
    text-decoration: none; 
    margin-top: 15px; 

    &.submenu {
        margin-top: 15px; 
    }
`

export const HoverOption = styled.div`
    color: var(--grey3); 
    font-size: 1.3125rem; 
    font-family: 'Source Sans 3'; 
    display: flex; 
    flex-direction: column; 
    align-items: end; 
    justify-content: center; 
    padding-right: 60px; 
    margin: 10px 0px; 
    border-right: 1px solid var(--grey1); 
`