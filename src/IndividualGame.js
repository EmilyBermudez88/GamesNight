//IndividualGame.js
import firebase from './firebase';
import { getDatabase, ref, push } from 'firebase/database';

function IndividualGame(props){

     // console.log(props);
     const database = getDatabase(firebase);
     const dbRef = ref(database);
     
     const itemToAdd = () => {
          const gameTitle = props.name;
          const gamePrice = props.price;
          const key = props.infoToPass
          const image = props.image;
          // props.handleClick({"name":gameTitle, "price":gamePrice, "key":key, "image": image});
          push(dbRef, { "name": gameTitle, "price": gamePrice, "key": key, "image": image})
     }


     return(
          <li className="gameContainer">
               <div className="imgContainer">
                    <img src={props.image} alt={`board game ${props.name}`}/>
               </div>
               <div className="gameText">
                    <h2>{props.name}</h2>
                    <div className="gameDetails">
                         <p>Min Age: {props.age}</p>
                         <p className="price">Price: ${props.price}</p>
                         <button
                              onClick={itemToAdd}
                              className={props.name}
                         >Add to Cart</button>
                    </div>
               </div>
               
          </li>
     )
}
export default IndividualGame;

