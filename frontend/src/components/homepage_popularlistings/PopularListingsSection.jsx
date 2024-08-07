import LinkWithBorder from "../buttons/LinkWithBorder";
import { SectionWrapper } from "../shared/page_sections/page_section_elements";
import PageSectionHeader from "../shared/page_sections/PageSectionHeader";


function PopularListingsSection() {
    const title = 'POPULAR TINY HOUSE DESTINATIONS'; 
    const subtitle = 'Hear it from our guests. This is the list of tiny houses that we have specially curated for you, based on reviews from our guests who have stayed in them.'

    return(
        <SectionWrapper>
            <PageSectionHeader title={ title } subtitle={ subtitle } />
            <LinkWithBorder page='/destinations' linktext='EXPLORE MORE'/>
        </SectionWrapper>
    )
}

export default PopularListingsSection; 