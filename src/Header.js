//Header.js
import scrabble from './assets/scrabble.svg';
import scrabbleTitle from './assets/scrabbleTitle.png';

function Header(){
     return(
          <header>
               <img src={scrabble} alt="scrabble board" className="scrabbleBoard" />
               <h1>
                    <img src={scrabbleTitle} alt="scrabble tiles spelling out Game Night" />
               </h1>
          </header>
     )
}

export default Header;