import { SearchText } from "../../globalTypography";
import { FieldWrapper } from "./searchbar_elements";
import { TiArrowSortedDown } from "react-icons/ti";

function StateField() {
    return(
    <FieldWrapper>
        <SearchText>STATE</SearchText>
        <TiArrowSortedDown />
    </FieldWrapper>
    )
}

export default StateField; 