import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Bars, Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          {isAuthenticated && (
            <>
              <NavLink to="/events" activeStyle>
                Events
              </NavLink>
              <NavLink to="/discussion" activeStyle>
                Discussion
              </NavLink>
              <NavLink to="/goal" activeStyle>
                Goals
              </NavLink>
              <NavLink to="/blogs" activeStyle>
                Blogs
              </NavLink>
            </>
          )}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          {isAuthenticated ? (
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="bg-red-500 text-white py-2 px-6 rounded-lg font-semibold shadow hover:bg-red-600 hover:text-white transition duration-300"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold shadow hover:bg-blue-800 hover:text-white transition duration-300 mr-0"
            >
              Login
            </button>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
