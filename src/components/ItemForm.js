import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [nameInput, setNameInput] = useState("")
  const [categoryInput, setCategory] = useState("Produce")

  function handleName(e) {
    setNameInput(e.target.value)
  }
  
  function handleCategory(e) {
    setCategory(e.target.value)
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    const newProj = {
      id: uuid(),
      name: nameInput,
      category: categoryInput
    }
    onItemFormSubmit(newProj)
  }

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={nameInput} onChange={handleName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
