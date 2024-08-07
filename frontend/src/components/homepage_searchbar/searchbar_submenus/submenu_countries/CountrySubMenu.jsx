import { CountrySubWrapper, CountryListWrapper, CountryBox } from "./country_submenu_elements";

function CountrySubMenu({ chooseCountry }) {

    const countries = ['Australia', 'Europe', 'Malaysia', 'New Zealand', 'Taiwan']; 
    
    return(
        <CountrySubWrapper>
            <CountryListWrapper>
                {   countries && countries.map((country, index) => 
                        <CountryBox key={ index } onClick={ chooseCountry }>
                            { country.toUpperCase() }
                        </CountryBox>
                    )
                }
            </CountryListWrapper>
        </CountrySubWrapper>
    )
}

export default CountrySubMenu; 