import { useState } from "react";
import { SearchBarWrapper, SubMenusWrapper } from "./searchbar_elements";
import CountrySubMenu from "./searchbar_submenus/submenu_countries/CountrySubMenu";
import SearchButton from "./SearchButton";
import SearchField from "./SearchField";

function MainSearchBar() {
    const [seeCountries, setSeeCountries] = useState(false); 
    const [seeState, setSeeState] = useState(false);
    const [seeCity, setSeeCity] = useState(false); 
    const [seeGuests, setSeeGuests] = useState(false); 
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState(''); 
    const [selectedCity, setSelectedCity] = useState(''); 
    const [guestNumber, setGuestNumber] = useState('');

    const openCountry = () => {
        setSeeCountries(!seeCountries); 
        setSeeState(false); 
        setSeeCity(false); 
        setSeeGuests(false); 
    }

    const openState = () => {
        setSeeState(!seeState); 
        setSeeCountries(false); 
        setSeeCity(false); 
        setSeeGuests(false); 
    }

    const openCity = () => {
        setSeeCity(!seeCity); 
        setSeeCountries(false); 
        setSeeState(false); 
        setSeeGuests(false); 
    }

    const openGuests = () => {
        setSeeGuests(!seeGuests); 
        setSeeCountries(false); 
        setSeeState(false); 
        setSeeCity(false); 
    }

    const chooseCountry = (e) => {
        const thisCountry = e.target.innerText; 
        setSelectedCountry(thisCountry); 
    }

    return(
        <>
        <SearchBarWrapper>
            <SearchField field='COUNTRY' selectedOption={ selectedCountry } rounded='yes' onClick={ openCountry } />
            <SearchField field='STATE' selectedOption={ selectedState } onClick={ openState } />
            <SearchField field='CITY' selectedOption={ selectedCity } onClick={ openCity } />
            <SearchField field='GUESTS' selectedOption={ guestNumber } onClick={ openGuests } />
            <SearchButton />
        </SearchBarWrapper>
        <SubMenusWrapper>
            {   seeCountries &&
                    <CountrySubMenu chooseCountry={ chooseCountry }/>
            }
        </SubMenusWrapper>
        </>
    )
}

export default MainSearchBar; 
