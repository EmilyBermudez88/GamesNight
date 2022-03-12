//IndividualGame.js
// import { useState } from 'react';

function IndividualGame(props){

     // console.log(props);

     // const [cartItem, setCartItem]= useState([]);

     // const addToCart = (e)=> {
     //      console.log(e.target)
     //      setCartItem([...cartItem, e.target.className])
     // }
     
     const handleClick = (e) => {
          console.log(e.target.className);
     }


     return(
          <div>
               <img src={props.image} alt={props.altText}/>
               <h3>{props.name}</h3>
               <p>Min Age: {props.age}</p>
               <p>Price: {props.price}</p>
               <button
                    onClick={handleClick}
                    className={props.name}
               >Add to Cart</button>
          </div>
     )
}
export default IndividualGame;


//so with what I currently have, it is updating the state of EACH cart item INDIVIDUALLY, instead of an overall state for all the items together
     //so I need to be pushing a new like each time
