//ShoppingCart.js

// import { useState } from 'react';
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CartMenu from './CartMenu';


function ShoppingCart(props){

     // console.log(props);

     const [displayCart, setDisplayCart] = useState(false)

     //show/hide cart based on click of shopping cart
     const showCart =(e)=>{
          setDisplayCart(!displayCart);
     }
     //hide cart based on click of close button (X)
     const closeCart = () => {
          setDisplayCart(!displayCart);
     }

     //function passed down from App.js to remove cart items
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
                    <ul className="cartMenu">
                         {
                              displayCart === true
                                   ? <>
                                        <FontAwesomeIcon
                                             icon={faXmark}
                                             className="close"
                                             onClick={closeCart} />
                                        {
                                             props.cart.map((item) => {
                                                  return (<CartMenu
                                                       key={item.key}
                                                       name={item.name}
                                                       price={item.price}
                                                       image={item.image}
                                                       handleClick={click}
                                                  />
                                                  )
                                             })
                                        }
                                        <div className="cartTotal">
                                             <h3>Your Total: 
                                             
                                             </h3>
                                        </div>
                                   </>
                              : null
                         }
                    </ul>
                    
               </div>
          </nav>
     )
}

export default ShoppingCart;