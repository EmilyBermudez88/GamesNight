//IndividualGame.js
// import { useState } from 'react';

function IndividualGame(props){

     // console.log(props);

     // const [cartItem, setCartItem]= useState([]);

     // const addToCart = (e)=> {
     //      console.log(e.target)
     //      setCartItem([...cartItem, e.target.className])
     // }
     
     const itemToAdd = () => {
          const gameTitle = props.name;
          const gamePrice = props.price;
          props.handleClick({"name":gameTitle, "price":gamePrice});
     }


     return(
          <div className="gameContainer">
               <div className="imgContainer">
                    <img src={props.image} alt={props.altText} />
               </div>
               <div className="gameText">
                    <h3>{props.name}</h3>
                    <div className="gameDetails">
                         <p>Min Age: {props.age}</p>
                         <p className="price">Price: {props.price}</p>
                         <button
                              onClick={itemToAdd}
                              className={props.name}
                         >Add to Cart</button>
                    </div>
               
               </div>
               
          </div>
     )
}
export default IndividualGame;


//so with what I currently have, it is updating the state of EACH cart item INDIVIDUALLY, instead of an overall state for all the items together
     //so I need to be pushing a new like each time
