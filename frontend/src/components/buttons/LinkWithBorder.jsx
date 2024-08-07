import styled from "styled-components"
import { Link } from "react-router-dom"

function LinkWithBorder({ linktext, page }) {
    return(
        <BorderedPill to={ page }>{ linktext }</BorderedPill>
    )
}

export default LinkWithBorder; 

export const BorderedPill = styled(Link)`
    color: var(--grey3); 
    font-size: 1.3125rem; 
    font-family: 'Source Sans 3'; 
    text-decoration: none; 
    padding: 10px 25px; 
    border: 1px solid var(--grey4); 
    border-radius: 2rem; 
`

