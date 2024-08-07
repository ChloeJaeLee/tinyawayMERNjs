import { SectionHeader, SectionSubtitle } from "../../../globalTypography";
import { SectionHeaderWrapper } from "./page_section_elements";

function PageSectionHeader({ title, subtitle }) {
    return(
        <SectionHeaderWrapper>
            <SectionHeader>{ title }</SectionHeader>
            <SectionSubtitle>{ subtitle }</SectionSubtitle>
        </SectionHeaderWrapper>
    )
}

export default PageSectionHeader; 