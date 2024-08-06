import { HomepageHeroWrapper } from "./hero_elements";
import { HeaderTitle } from "../../../globalTypography";
import MainSearchBar from "../../homepage_searchbar/MainSearchBar";
import heroBg from "../../../assets/heroBG.jpg"; 

function HomepageHero() {
    return(
        <>
            <HomepageHeroWrapper style={{ backgroundImage:`url(${ heroBg })`}}>
                <HeaderTitle className='homepage'>
                    Book & Experience Amazing <br/>
                    Tiny Houses
                </HeaderTitle>
                <MainSearchBar />
            </HomepageHeroWrapper>
        </>
    )
}

export default HomepageHero; 