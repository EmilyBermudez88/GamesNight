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

     console.log(props);

     const [displayCart, setDisplayCart] = useState(false)

     const showCart =(e)=>{
          setDisplayCart(!displayCart);
     }

     const closeCart = () => {
          setDisplayCart(!displayCart);
     }

     const click = (removedItem)=> {
          props.removeCartItem(removedItem);
     }

     return(
          <nav>
               <div className="wrapper">
                    <button
                         onClick={showCart}>
                         <FontAwesomeIcon
                              icon={faCartShopping} className="shoppingCart"
                         />
                    </button>
                         
                    {
                         displayCart===true  
                              ? <div>
                                   <FontAwesomeIcon 
                                        icon={faXmark}
                                        onClick={closeCart}/>
                                   {
                                        props.cart.map((item)=>{
                                             return( <CartMenu
                                                  name={item.name}
                                                  price={item.price} 
                                                  handleClick={click}
                                                  />
                                             )
                                        })
                                   }     
                              </div>
                         : null
                    }
               </div>
          </nav>
     )
}

export default ShoppingCart;

//the problem here is that we are not passing down the full array right now, we are passing down just the objects to go inside
     //so the array of items is still being held up inside App.js - it is accessible at ShoppingCart via props
     //so maybe need to send a function down, but how? 