import { AnnouncementContent, BarWrapper } from "./ann_bar_elements";
import { FaArrowRight } from "react-icons/fa6";

function AnnouncementBar() {
    return(
        <BarWrapper>
            <AnnouncementContent>
                Discover Nature. Stay In Comfort.
            </AnnouncementContent>
            <FaArrowRight />
        </BarWrapper>
    )
}

export default AnnouncementBar; 