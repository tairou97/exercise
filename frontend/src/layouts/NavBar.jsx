import React from "react";
import Search from "../components/extras/Search";
const NavBar = () => {
  const nav = [
    { id: 1, to: "/", name: "Home" },
    { id: 2, to: "/About", name: "About" },
    { id: 3, to: "/Projects", name: "Projects" },
    { id: 4, to: "/Register", name: "Register" },
    { id: 5, to: "/Login", name: "Login" },
    { id: 6, to: "/Logout", name: "Log Out" },
  ];
  return (
    <div>
      <nav className=" nav ">
        <Search />
        {nav.map((item) => (
          <a key={item.id} href={item.to}>
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
