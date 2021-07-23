import React, { useState } from 'react';

function ShoppingForm(props) {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    props.handleSubmit(text);
  };

  return(
    <div className=" container form-group mt-5">
      <form onSubmit={handleSubmit}>
        <Input
        type="text"
        placeholder="enter item"
        className="form-control w-75"

        onChange={handleChamge}
      />

      <input type="Submit" value="add" className="mt-3" />
      </form>
    </div>
  );
}

export default ShoppingForm ;