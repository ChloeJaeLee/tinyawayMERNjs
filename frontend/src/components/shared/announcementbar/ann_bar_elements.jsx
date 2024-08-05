import styled from 'styled-components'; 

export const BarWrapper = styled.div`
    background-color: var(--yellow); 
    width: 100%; 
    height: 3rem; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    gap: 0.5%; 

    &:hover {
        background-color: var(--darkYellow);    
    }
`

export const AnnouncementContent = styled.p`
    font-family: 'Source Sans 3';
    font-size: 1.125rem; 
    color: var(--black); 
`