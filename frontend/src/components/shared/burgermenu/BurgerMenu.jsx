import { BurgerWrapper, HoverOption, MenuOption, OptionsWrapper } from "./burger_elements";
import { IoIosClose } from "react-icons/io";

function BurgerMenu({ toggleBurger }) {
    return(
        <BurgerWrapper>
            <OptionsWrapper>
                <IoIosClose onClick={ toggleBurger } />
                <MenuOption to='/' onClick={ toggleBurger }>HOME</MenuOption>
                <MenuOption to='/destinations' onClick={ toggleBurger }>TINY HOUSE DESTINATIONS</MenuOption>
                <p>TINY AWAY ESCAPE</p>
                <HoverOption>
                    <MenuOption className='submenu' to='/escapes/grampians' onClick={ toggleBurger }>GRAMPIANS EDGE @ AUSTRALIA</MenuOption>
                    <MenuOption className='submenu' to='/escapes/lazarus' onClick={ toggleBurger }>LAZARUS ISLAND @ SINGAPORE</MenuOption>
                </HoverOption>
                <MenuOption to='/tiny-stories' onClick={ toggleBurger }>TINY STORIES</MenuOption>
                <p>ABOUT US</p>
                <HoverOption>
                    <MenuOption className='submenu' to='/our-story' onClick={ toggleBurger }>OUR STORY</MenuOption>
                    <MenuOption className='submenu' to='/become-a-host' onClick={ toggleBurger }>BECOME A HOST</MenuOption>
                    <MenuOption className='submenu' to='/contact-us' onClick={ toggleBurger }>CONTACT US</MenuOption>
                    <MenuOption className='submenu' to='/faq' onClick={ toggleBurger }>FAQ & CANCELLATION POLICY</MenuOption>
                </HoverOption>
                <MenuOption to='/gift-cards' onClick={ toggleBurger }>GIFT CARDS</MenuOption>
                <MenuOption to='/' onClick={ toggleBurger }>BLOG</MenuOption>
                <MenuOption to='/login' onClick={ toggleBurger }>LOGIN</MenuOption>
            </OptionsWrapper>
        </BurgerWrapper>
    )
}

export default BurgerMenu; 