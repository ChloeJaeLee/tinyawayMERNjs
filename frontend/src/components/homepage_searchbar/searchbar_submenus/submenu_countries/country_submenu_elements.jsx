import styled from "styled-components";

export const CountrySubWrapper = styled.div`
    background-color: white; 
    border-bottom-left-radius: 1rem; 
    border-bottom-right-radius: 1rem; 
    grid-row: 1 / 12; 
    z-index: 0; 
`

export const CountryListWrapper = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: space-between; 
    padding-top: 30px; 
`

export const CountryBox = styled.div`
    width: 100%; 
    color: var(--grey3); 
    font-size: 1.3125rem; 
    font-family: 'Source Sans 3'; 
    text-align: center; 
    margin: 10px 0px; 
`