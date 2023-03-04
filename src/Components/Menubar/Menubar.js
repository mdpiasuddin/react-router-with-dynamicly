import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import ShowingNavitem from "../ShowingNavItem/ShowingNavitem";
import navItem from "./../../comon";

const Menubar = () => {
  const [menuitems, setMenuItems] = useState([]);

  return (
    <div>
      <ul className="flex justify-center p-3 bg-blue-400 text-2xl text-white ">
        {navItem.map((item) => (
          <ShowingNavitem key={item.id} name={item.name}></ShowingNavitem>
        ))}
      </ul>
    </div>
  );
};

export default Menubar;
