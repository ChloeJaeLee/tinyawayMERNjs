import { SearchButtonText, SearchButtonWrapper } from "./searchbar_elements";

function SearchButton() {
    return(
        <SearchButtonWrapper>
            <SearchButtonText to='/destinations'>SEARCH</SearchButtonText>
        </SearchButtonWrapper>
    )
}

export default SearchButton; 