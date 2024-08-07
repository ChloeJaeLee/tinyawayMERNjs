import { Link } from "react-router-dom";
import { useState } from "react";
import { NavWrapper, LogoBox, LinkSide, NavLink, ProfileIcon } from "./navbar_elements";
import BurgerMenu from "../burgermenu/BurgerMenu";
import talogo from "../../../assets/talogo.png"; 
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
    const [seeBurger, setSeeBurger] = useState(false); 

    const toggleBurger = () => {
        setSeeBurger(!seeBurger); 
        if (!seeBurger) {
            // Disable scrolling
            document.body.classList.add('no-scroll');
        } else {
            // Enable scrolling
            document.body.classList.remove('no-scroll');
        }
    };
    

    return(
        <>
            <NavWrapper>
                <Link to='/'>
                    <LogoBox style={{ backgroundImage: `url(${ talogo })` }}/>
                </Link>
                <LinkSide>
                    <NavLink to='/gift-cards'>GIFT CARDS</NavLink>
                    <p>LANGUAGE</p>
                    <p>CURRENCY</p>
                    <NavLink to='/destinations' className='button' >BOOK YOUR STAY</NavLink>
                    <NavLink to='/login'>
                        <ProfileIcon><FaRegUserCircle /></ProfileIcon>
                    </NavLink>
                    <NavLink to='/cart'>
                        <BsCart2 style={{ fontSize:'1.8rem' }} />
                    </NavLink>
                    <AiOutlineMenu 
                        style={{ fontSize:'1.8rem', marginRight:'30px' }} 
                        onClick={ toggleBurger }
                    />
                </LinkSide>
            </NavWrapper>
            {   seeBurger &&
                    <BurgerMenu toggleBurger={ toggleBurger } />
            }
        </>
    )
}

export default Navbar;