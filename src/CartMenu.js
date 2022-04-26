//CartMenu.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';



function CartMenu (props){

     // console.log(props.id)
     //function passed down from App.js - pull name from game selected
     const removeItem = (e) => {
          const itemToRemove = e.target.className;
          props.handleClick(itemToRemove); 
     }

     return(
          <li key={props.id}>
               <div className="cartImage">
                    <img src={props.image} alt={`board game ${props.name}`} />
               </div>
               <div className="cartText">
                    <h2>{props.name}</h2>
                    <p>{`$${props.price}`}</p>
                    <button
                         onClick={removeItem}
                         className={props.id}>
                         <FontAwesomeIcon
                              icon={faXmark}
                         />
                         Remove
                    </button>    
               </div>     
          </li>
     )
}

export default CartMenu;