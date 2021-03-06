import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

import Header from './Header';
import Form from './Form';
import GameGallery from './GameGallery';
import ShoppingNav from './ShoppingNav';
import LoadingAnimation from './LoadingAnimation';


function App() {

  //state object of games from the API
  const [games, setGames] = useState([]);

  //state object of user input to be passed up from Form
  //set base call to have an API call fire on load
  const [playerChoice, setPlayerChoice] = useState({
      players: 4,
      age:12
  });

  //state to track if the api is loading data or not
  const [loading, setLoading]= useState(false);

  //function to set games based on user selection
  const setGameOptions = (e, userSelection) => {
    e.preventDefault();
    setPlayerChoice(userSelection);
  }
  

  //make API call - will call on start, and then each time user changes preferences
  useEffect(()=>{
    const apiKey = 'oEDsQuBLZm'
    axios({
      url: 'https://api.boardgameatlas.com/api/search',
      params: {
        client_id: apiKey,
        max_players: playerChoice.players,
        lt_min_age: playerChoice.age
      }
    }).then((response) => {
      if(response.ok || response.status === 200){
      setGames(response.data.games);
      
      } else {
        alert('Sorry, something went wrong! Please select again.');
      }
      setLoading(true);
    })
    setLoading(false);
  }, [playerChoice]);


  return (
    <div>
      <ShoppingNav/>
      <Header />
      <main>
        <div className="wrapper">
          <Form handleSubmit={setGameOptions} />
          
          {loading ? 
            <GameGallery
            gameProps={games} /> 
            : <LoadingAnimation/>}
        </div>
      </main>  
      <footer>
        <p>Created by Emily Read @ <a href="https://junocollege.com/" target="_blank" rel="noopener noreferrer">Juno College</a></p>
        <p>API courtesy of <a href="https://www.boardgameatlas.com/api/docs" target="_blank" rel="noopener noreferrer">Board Game Atlas</a></p>
      </footer>
    </div>
  );
}

export default App;




  // //state object to track which items have been selected to Add to the cart
  // const [cartItem, setCartItem] = useState([]);

 // //function to add items to cart (called in IndividualGame)
  // const setCart = (gameToAdd) => {
  //   setCartItem(() => [...cartItem, gameToAdd])
  // }




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