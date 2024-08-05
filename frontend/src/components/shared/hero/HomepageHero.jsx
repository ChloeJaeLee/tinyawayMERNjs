import { HomepageHeroWrapper } from "./hero_elements";
import { HeroTitle } from "../../../globalTypography";
import MainSearchBar from "../../homepage_searchbar/MainSearchBar";
import heroBg from "../../../assets/heroBG.jpg"; 

function HomepageHero() {
    return(
        <>
            <HomepageHeroWrapper style={{ backgroundImage:`url(${ heroBg })`}}>
                <HeroTitle className='homepage'>
                    Book & Experience Amazing <br/>
                    Tiny Houses
                </HeroTitle>
                <MainSearchBar />
            </HomepageHeroWrapper>
        </>
    )
}

export default HomepageHero; 