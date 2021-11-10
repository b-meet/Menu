import React, { useState } from "react";
import Menu from "./Menu";
import Buttons from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);

  // array of the categories available on the menu its use in buttons

  const available = [
    "all",
    ...new Set(
      items.map((item) => {
        return item.category;
      })
    ),
  ];

  //on click handler function filters the menu items

  const filteredMenu = (category) => {
    const sortedMenu = items.filter((item) => item.category === category);
    if (category === "all") {
      return setMenuItems(items);
    }
    setMenuItems(sortedMenu);
  };

  return (
    <main className='container'>
      <article className='heading-container'>
        <h1 className='main-heading'>Our menu</h1>
      </article>
      <Buttons categories={available} filteration={filteredMenu} />
      <Menu dishes={menuItems} />
    </main>
  );
}

export default App;
