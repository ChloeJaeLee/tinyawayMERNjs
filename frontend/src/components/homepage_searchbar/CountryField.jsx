import { SearchText } from "../../globalTypography";
import { CountryWrapper } from "./searchbar_elements";
import { TiArrowSortedDown } from "react-icons/ti";

function CountryField() {
    return(
        <CountryWrapper>
            <SearchText>COUNTRY</SearchText>
            <TiArrowSortedDown />
        </CountryWrapper>
    )
}

export default CountryField; 