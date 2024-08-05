import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/global/homepage/Homepage";
import DestinationsPage from "./pages/global/destinations/DestinationsPage";
import SearchResultsPage from "./pages/global/searchresults/SearchResults"; 
import OurStoryPage from "./pages/global/aboutus/ourstory/OurStoryPage";
import BecomeAHostPage from "./pages/global/aboutus/becomeahost/BecomeAHostPage"; 
import ContactUsPage from "./pages/global/aboutus/contactus/ContactUsPage"; 
import FaqPage from "./pages/global/aboutus/faq/FaqPage"; 
import GiftcardsPage from "./pages/global/giftcards/GiftcardsPage"; 
import LoginPage from "./pages/global/userpages/login/LoginPage"; 
import SignupPage from "./pages/global/userpages/signup/SignupPage"; 
import TinyStoriesPage from "./pages/global/tinystories/TinyStoriesPage"; 
import GrampiansPage from "./pages/escapes/grampians/GrampiansPage"; 
import LazarusPage from "./pages/escapes/lazarus/LazarusPage"; 
import CartCheckoutPage from "./pages/global/shoppingcart/CartCheckoutPage"; 


function App() {
  return (
    <Routes>
      {/* Global Routes */}
      <Route path='/' element={ <Homepage /> } /> 
      <Route path='destinations' element={ <DestinationsPage /> }/>
          {/* <Route path='destinations/:id' /> */}
      <Route path='search-results' element={ <SearchResultsPage /> }/> 
      <Route path='our-story' element={ <OurStoryPage /> } />
      <Route path='become-a-host' element={ <BecomeAHostPage /> } />
      <Route path='contact-us' element={ <ContactUsPage /> } />
      <Route path='faq' element={ <FaqPage /> } />
      <Route path='gift-cards' element={ <GiftcardsPage /> } />
      <Route path='signup' element={ <SignupPage /> } />
      <Route path='login' element={ <LoginPage /> } />
      <Route path='tiny-stories' element={ <TinyStoriesPage /> } />
          {/* <Route path='tiny-stories/:id' /> */}
      <Route path='/cart' element={ <CartCheckoutPage /> } />

      {/* Tiny Away Escape Routes */}
      <Route path='escapes/grampians' element={ <GrampiansPage /> } />
      <Route path='escapes/lazarus' element={ <LazarusPage /> } />
    </Routes>
  )
}

export default App; 

// home page 
// destinations page 
// single listing page 
// search results page 
// grampians page 
// lazarus page 
// tiny stories page 
// single story page 
// our story page 
// become a host page 
// contact us page 
// faq page 
// gift cards page 
// blog page 
// login page 
// sign up page 
// shopping cart page 
// booking confirmed page 
// user profile page - PAGE NOT CREATED YET
// user promo codes page - PAGE NOT CREATED YET
// user rewards page - PAGE NOT CREATED YET
// user reservations page - PAGE NOT CREATED YET
// user wishlist page - PAGE NOT CREATED YET
// user gift cards page - PAGE NOT CREATED YET
// user referral program page - PAGE NOT CREATED YET
// user story / create a story page - PAGE NOT CREATED YET
// user edit profile page - PAGE NOT CREATED YET
