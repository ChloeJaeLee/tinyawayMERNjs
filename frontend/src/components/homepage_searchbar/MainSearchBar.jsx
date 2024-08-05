import CityField from "./CityField";
import CountryField from "./CountryField";
import GuestField from "./GuestField";
import { SearchBarWrapper } from "./searchbar_elements";
import SearchButton from "./SearchButton";
import StateField from "./StateField";

function MainSearchBar() {
    return(
        <SearchBarWrapper>
            <CountryField />
            <StateField />
            <CityField />
            <GuestField />
            <SearchButton />
        </SearchBarWrapper>
    )
}

export default MainSearchBar; 
