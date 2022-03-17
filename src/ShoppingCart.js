//ShoppingCart.js

import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CartMenu from './CartMenu';


function ShoppingCart(props){

     // console.log(props.cart);

     //state to show or hide cart 
    const [displayCart, setDisplayCart] = useState(false)

     //show/hide cart based on click of shopping cart
    const showCart =(e)=>{
        setDisplayCart(!displayCart);
    }
     //hide cart based on click of close button (X)
    const closeCart = () => {
        setDisplayCart(!displayCart);
    }

     //loop through props.cart to pull prices and push them into one array
    const cart = props.cart;
    const newTotal = [];
    for (let i = 0; i < cart.length; i++) {
        newTotal.push(parseFloat(cart[i].price));
    }
     //now loop through that array to get the sum of all it's prices:
    let cartSum = 0;
    for (let i=0; i < newTotal.length; i++){
        cartSum +=newTotal[i];
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
                <p className="totalCartPurchases">{newTotal.length}</p>
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
                            <hr></hr>
                            <h3 className="totalCost">Your Total: ${cartSum.toFixed(2)}</h3>
                        </>
                    : null
                    }
                </ul>
                    
            </div>
        </nav>
    )
}

export default ShoppingCart;