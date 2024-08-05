import { SearchText } from "../../globalTypography";
import { FieldWrapper } from "./searchbar_elements";
import { TiArrowSortedDown } from "react-icons/ti";

function GuestField() {
    return(
    <FieldWrapper>
        <SearchText>GUESTS</SearchText>
        <TiArrowSortedDown />
    </FieldWrapper>
    )
}

export default GuestField; 