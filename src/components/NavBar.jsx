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
      name: "Projects",
      to: "/projects",
      id: 2,
    },
    {
      name: "Contact",
      to: "/contact",
      id: 3,
    },
  ];

  return (
    <nav>
      <ul>
        {navBar.map((nav) => (
          <li key={nav.id}>
            <NavLink>
              {nav.to} {nav.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
