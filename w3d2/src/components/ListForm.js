import React, { useState } from 'react';

const ListForm = (props) => {
  const { list, setList } = props;
  const [ name, setName ] = useState("");
  const [ qty, setQty ] = useState(1);

  const submitItem = (e) => {
    e.preventDefault();

    const newItem = {
      name: name,
      qty: qty,
    }

    setList([...list, newItem]);
    setName("");
    setQty(1);
  }

  return (
    <div>
      <h2>Add to List</h2>
      <form onSubmit={ submitItem }>
        <div>
          <label>Quantity</label>
          <input
            type="text"
            value={ qty }
            onChange={ (e) => setQty(e.target.value) }
          />
        </div>
        <div>
          <label>Item Name</label>
          <input
            type="text"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
        </div>
        <button type="submit">Add Item</button>
      </form>

    </div>
  )
}

export default ListForm;
