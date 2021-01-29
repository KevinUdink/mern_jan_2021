import React from 'react';

const DisplayList = (props) => {
  const { itemList, setItemList } = props;

  console.log(itemList);

  const removeItem = (e, name) => {
    setItemList(itemList.filter((item) => item.name !== name ))
  }

  return (
    <div>
      <h3>My Full List</h3>
      <table>
        <thead>
          <th>Quantity</th>
          <th>Name</th>
          <th>Action</th>
        </thead>
        <tbody>
          {
            itemList.map((item, index) => (
              <tr key={index}>
                <td>{item.qty}</td>
                <td>{item.name}</td>
                <td>
                  <button onClick={ (e) => removeItem(e, item.name) }>Remove</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default DisplayList;