import React, { useState } from 'react';

function DisplayList (props) {
  return (
    <div className="container">
      <ul className="list-group w-75 mt-3">

        {props.data.map(item=>(
          <li className="list-group-item">{item}</li>
        ))}

      </ul>
    </div>    
  );
}

export default DisplayList ;