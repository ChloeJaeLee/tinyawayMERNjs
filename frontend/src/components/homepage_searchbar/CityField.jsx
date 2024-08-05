import { SearchText } from "../../globalTypography";
import { FieldWrapper } from "./searchbar_elements";
import { TiArrowSortedDown } from "react-icons/ti";

function CityField() {
    return(
    <FieldWrapper>
        <SearchText>CITY</SearchText>
        <TiArrowSortedDown />
    </FieldWrapper>
    )
}

export default CityField; 