import { Link } from "react-router-dom";
import styled from "styled-components";

// Main Search Bar Grid
export const SearchBarWrapper = styled.div`
    display: grid; 
    grid-template-columns: repeat(5, 200px); 
    margin-top: 50px; 
    // border: 2px solid lime; 
    z-index: 2; 
`

export const FieldWrapper = styled.div`
    width: 150px; 
    color: var(--grey3); 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    background-color: white; 
    padding: 15px 25px; 
    border-left: 1px solid var(--grey1); 

    &.yes {
        border: none; 
        border-top-left-radius: 2rem; 
        border-bottom-left-radius: 2rem; 
    }

    input {
        color: var(--grey3); 
        font-family: 'Source Sans 3'; 
        font-size: 1.3125rem; 
        width: 130px; 
        border: none; 

        &:focus {
            outline: none; 
        }
    }
`

export const FieldText = styled.p`
    color: var(--grey3); 
    font-family: 'Source Sans 3';
    font-size: 1.3125rem; 
`

// Submenus Grid
export const SubMenusWrapper = styled.div`
    display: grid; 
    grid-template-columns: repeat(5, 200px); 
    grid-template-rows: repeat(12, 27px); 
    position: relative; 
    top: -27px; 
    z-index: 1; 
`

// Search Button Styles 
export const SearchButtonWrapper = styled.div`
    width: 150px; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    background-color: var(--yellow); 
    padding: 15px 25px; 
    border-top-right-radius: 2rem; 
    border-bottom-right-radius: 2rem; 
    border-left: 1px solid var(--grey1); 
`

export const SearchButtonText = styled(Link)`
    color: var(--black); 
    font-family: 'Source Sans 3';
    font-size: 1.3125rem; 
    text-decoration: none; 
`

