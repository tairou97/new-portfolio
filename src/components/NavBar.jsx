import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navBar = [
    {
      name: "About",
      to: "/",
      id: 1,
    },
    {
      name: "Skills",
      to: "/skills",
      id: 2,
    },
    {
      name: "Projects",
      to: "/projects",
      id: 3,
    },
    {
      name: "Contact",
      to: "/contact",
      id: 4,
    },
  ];

  return (
    <nav>
      <ul style={{ display: "flex", margin: "20px" }}>
        {navBar.map((nav) => (
          <li style={{ margin: "10px" }} key={nav.id}>
            <NavLink to={nav.to}>{nav.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
