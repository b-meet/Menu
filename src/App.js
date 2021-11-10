import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);

  return (
    <main className='container'>
      <article className='heading-container'>
        <h1 className='main-heading'>Our menu</h1>
      </article>
      <Categories />
      <Menu dishes={menuItems} />
    </main>
  );
}

export default App;
