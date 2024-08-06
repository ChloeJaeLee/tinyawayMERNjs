import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchBarWrapper = styled.div`
    display: grid; 
    grid-auto-flow: column; 
    margin-top: 50px; 
`

export const CountryWrapper = styled.div`
    width: 150px; 
    color: var(--grey3); 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    background-color: white; 
    padding: 15px 25px; 
    border-top-left-radius: 2rem; 
    border-bottom-left-radius: 2rem; 
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
`

export const SearchButtonWrapper = styled.div`
    width: 150px; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    background-color: var(--yellow); 
    padding: 15px 20px; 
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