import React from "react";

const Cards = (props) => {
  const cardsValue = props.value.map((newValue) => {
    return (
      <div className="bg-red-200 m-2 rounded-xl px-2 py-2">
       <h1>{newValue.name}</h1> 
         <p>{newValue.text}</p>
      </div>
    );
  });

  return (
    <li className="flex flex-row list-none flex-wrap">
      {cardsValue}
    </li>
  );
};

export default Cards;
