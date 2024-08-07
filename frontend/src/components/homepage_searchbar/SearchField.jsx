import { FieldWrapper, FieldText } from "./searchbar_elements";
import { TiArrowSortedDown } from "react-icons/ti";

function SearchField({ field, selectedOption, rounded, onClick }) {

        return(
            <FieldWrapper className={ rounded} onClick={ onClick }>
                {selectedOption === '' ? 
                (
                    <FieldText>{ field }</FieldText>
                ) : (
                    <FieldText>{ selectedOption }</FieldText>
                )}
                <TiArrowSortedDown />
            </FieldWrapper>
        )
    }

export default SearchField;