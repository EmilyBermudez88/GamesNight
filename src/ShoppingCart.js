//ShoppingCart.js

//goals: we want when a button is clicked inside individualGame.js, for that click to register and add a number to the cart
//do we need to receive the api call here as well to have the information to know what is being added?

//Shopping cart will be a direct child of App.js

//add event handler to buttons in IndividualGame.js

//in Shopping cart, create state to track and push into the array 
//from ShoppingCart, pass an anonymous function down to IndividualGame.js to fill 
     //inside IndividualGames, call that empty function, and plug in an object that you want to send back up to shopping cart 
     //inside shoppingCart, use the push() method to add to the array 


// import { useState } from 'react';
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CartMenu from './CartMenu';


function ShoppingCart(props){

     console.log(props.cart);

     const [displayCart, setDisplayCart] = useState(false)

     const handleClick =()=>{
          setDisplayCart(!displayCart);
     }

     return(
          <nav>
               <div className="wrapper">
                    <button
                         onClick={handleClick}>
                         <FontAwesomeIcon
                              icon={faCartShopping} className="shoppingCart"
                         />
                         <FontAwesomeIcon icon={faXmark} />
                         {
                              displayCart===true  
                                   ? props.cart.map((item)=>{
                                        return(
                                             <CartMenu 
                                                  name={item.name}
                                                  price={item.price}/>
                                        )
                                   })
                                   : null
                         }
                    </button>               
               </div>
               
          </nav>
     )
}

export default ShoppingCart;