import React from "react";
import { Link, NavLink } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const ShowingNavitem = (props) => {
  return (
    <div className="">
      <li className="ease-in-out duration-300 ml-8 hover:text-black hover:bg-red-200 p-2 rounded">
        <Link to={`/${props.name}`}> {props.name}</Link>
      </li>
    </div>
  );
};

export default ShowingNavitem;
