import React from "react";

const Buttons = ({ categories, filteration }) => {
  return (
    <article className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className='btn'
            onClick={() => filteration(category)}
          >
            {category}
          </button>
        );
      })}
    </article>
  );
};

export default Buttons;
