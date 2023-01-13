import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")
    
    function handleChange(e){
      //will keep track of the value chosen by the user
      setSelectedCategory(e.target.value)
    }

    //filter out items that have already been selected
    const displayItems = items.filter((item) => {
      if (selectedCategory === "All")
      return selectedCategory;

      else{
      return item.category === selectedCategory;
    }
    })
 

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
