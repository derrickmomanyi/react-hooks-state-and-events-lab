import React, {useState} from "react";

function Item({ name, category }) {

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  function handleClick(){
   setIsAddedToCart((isAddedToCart) => !isAddedToCart)
  }
  return (
    <li className={isAddedToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {handleClick}>{isAddedToCart ? "Add to" : "Remove From"} Cart</button>
    </li>
  );
}

export default Item;
