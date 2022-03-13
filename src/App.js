import './App.css';
// import headerImage from  './assets/headerImage.png';
import axios from 'axios';
import {useEffect, useState} from 'react';

import Header from './Header';
import Form from './Form';
import GameGallery from './GameGallery';
import ShoppingCart from './ShoppingCart';

//possible params to use for app:
//name: string
//fuzzy_match: 'can find games based closely on what user types (in case there's a typo)'
//min_players + max_players = has to exactly match what they put in
//gt_min_players = greater than provided # (so if they chose 2 as minimum, they will get games starting with 3 players ()
     //lt_max_players = less than provided max number of players (inputting 5 will mean you get back 4ppl or less)
//gt_min_playtime= greater than provided minimum minutes of playtime)
     //lt_min_playtime = less than provided minutes
//gt_min_age = greater than provided minimum age recommended 
//lt_price = less than game's lowest listed price 
//FIELDS: 'name,description,image_url' - means the api call will only return those aspects instead of entire object

function App() {

  //state object of games from the API
  const [games, setGames] = useState([]);

  //state object of user input to be passed up from Form
  //set base call to have an API call fire on load
  const [playerCount, setPlayerCount] = useState({
      players: 4,
      age:12
  });

  //state object to track which items have been selected to Add to the cart
  const [cartItem, setCartItem] = useState([]);

  const setCart = (gameToAdd) => {
    // console.log(gameToAdd)
    setCartItem(() => [...cartItem, gameToAdd])
  }


  useEffect(()=>{
    const apiKey = 'oEDsQuBLZm'
    axios({
      url: 'https://api.boardgameatlas.com/api/search',
      params: {
        client_id: apiKey,
        max_players: playerCount.players,
        lt_min_age: playerCount.age
      }
    }).then((response) => {
      // console.log(response.data.games);
      setGames(response.data.games);
    })
  }, [playerCount]);

  const setGameOptions = (e, userSelection)=>{
    e.preventDefault();
    setPlayerCount(userSelection);
  }

  return (
    <div>
      <ShoppingCart cart={cartItem}/>
      <Header />
      <main>
        <div className="wrapper">
          <Form handleSubmit={setGameOptions} />
          <GameGallery 
            gameProps={games} 
            handleClick={setCart}/>
        </div>
      </main>  
    </div>
  );
}

export default App;


//create components: App.js, Form.js, GalleryofGames.js, IndividualGame.js
//inside App.js create state for:
    //2 selects in form
    //array of games given by API call
//create API call within useEffect
//create function that updates both inputs, and pass it down to Form.js via props

//in Form.js, create form layout, and pass parameter to receive function
//create state for the <select>
//assign eventListener to both selects and use state to track change and reassign in variable
//pass anonymous function (with App.js' function inside - with the values of the changes made by user) back to App.js

//with new array of games according to user selection, pass it down to GalleryofGames
//use parameter in GalleryofGames to receive array
  //map through array to return: id, name, images.medium, max_players, price_text
  //attach that to IndividualGame and pass that down via props

//create IndividualGame for structure of how games will be presented