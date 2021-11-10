import React from "react";

const Menu = ({ dishes }) => {
  return (
    <article className='menu-items-container'>
      {dishes.map(({ id, title, price, img, desc }) => {
        return (
          <section key={id} className='single-item-container'>
            <img src={img} alt={`${title}`} className='image' />
            <div className='content-container'>
              <header className='name-price-container'>
                <h3 className='name'>{title}</h3>
                <h3 className='price'>$ {price}</h3>
              </header>
              <p className='description'>{desc}</p>
            </div>
          </section>
        );
      })}
    </article>
  );
};

export default Menu;
