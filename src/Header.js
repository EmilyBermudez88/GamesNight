//Header.js
import headerImage from './assets/headerImage.png';

function Header(){
     return(
          <header>
               {/* <ShoppingCart /> */}
               <img src={headerImage} alt="" />
               <h1>Game Night</h1>
               <p>Looking to make your night more interesting? Why not a boardgame!</p>
          </header>
     )
}

export default Header;