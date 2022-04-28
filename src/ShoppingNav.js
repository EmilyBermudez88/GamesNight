//ShoppingCart.js

import { useState } from 'react';
import firebase from './firebase';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CartMenu from './CartMenu';
import { useEffect } from 'react';


function ShoppingCart(){

    //firebase variables
    const database = getDatabase(firebase);
    const dbRef = ref(database);

     //state to show or hide cart 
    const [displayCart, setDisplayCart] = useState(false)

    //state to display cartItems
    const [cartItems, setCartItems] = useState([]);

     //show/hide cart based on click of shopping cart
    const showCart =(e)=>{
        setDisplayCart(!displayCart);
    }
     //hide cart based on click of close button (X)
    const closeCart = () => {
        setDisplayCart(!displayCart);
    }

    //pulling the cart items down from firebase
    useEffect(()=> {

        onValue(dbRef, (response) => {
            const newState = [];
            const data = response.val()
            // console.log(data);
            for (let key in data) {
                // console.log(data[key])
                // console.log(key);
                newState.push({key:key, game:data[key]});
            }
            // newState.push(data);
            setCartItems(newState);
        })        
    },[dbRef])
    
    
     //loop through cartItems to pull prices and push them into one array
    const cart = cartItems;
    const newTotal = [];
    for (let i = 0; i < cart.length; i++) {
        newTotal.push(parseFloat(cart[i].game.price));
    }
     //now loop through that array to get the sum of all it's prices:
    let cartSum = 0;
    for (let i=0; i < newTotal.length; i++){
        cartSum +=newTotal[i];
    }

    //remove games from firebase on click
    const removeGame = (id) => {
        const userRef = ref(database, `/${id}`);
        remove(userRef);
    }

    return(
        <>
        <nav>
            <div className="wrapper">
                <button
                    onClick={showCart}>
                    <FontAwesomeIcon
                        icon={faCartShopping} className="cartIcon"
                    />
                </button>
                <p className="totalCartPurchases">{newTotal.length}</p>
            </div>
        </nav>
            <div className="cartWrapper">
                {
                    displayCart === true
                        ? <>
                            <ul className="cartMenu">
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    className="close"
                                    onClick={closeCart} />
                                {
                                    cartItems.map((item) => {
                                        return (<CartMenu
                                            key={item.key}
                                            id={item.key}
                                            name={item.game.name}
                                            price={item.game.price}
                                            image={item.game.image}
                                            handleClick={removeGame}
                                        />
                                        )
                                    })
                                }
                                <hr></hr>
                                <h3 className="totalCost">Your Total: ${cartSum.toFixed(2)}</h3>
                            </ul>
                        </>
                    : null
                } 
            </div>
                
                    
        
        </>
    )
}

export default ShoppingCart;


    // //function to remove items from cart (called in CartMenu)
    // const removeCartItem = (gameParam) => {
    //     let index
    //     //pull index of each item inside cart
    //     for (let i = 0; i < cartItems.length; i++) {
    //         if (cartItems[i].name === gameParam) {
    //             index = i;
    //         }
    //     }
    //     //with index values, create new 
    //     const newCart = Array.from(cartItems);
    //     newCart.splice(index, 1);
    //     setCartItems(newCart);
    // }
