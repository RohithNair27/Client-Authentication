import React from "react";
import HeaderStyle from "./Header.module.css";
import { NavLink } from "react-router";
import { Button } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { useAuth } from "../hooks/useAuth";
function Header() {
  let { isLoggedIn } = useAuth();
  return (
    <header>
      <h1>Authentication</h1>
      {isLoggedIn ? (
        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="outline" size="sm">
              Open
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${HeaderStyle.nav_btn} ${HeaderStyle.active}`
                    : HeaderStyle.nav_btn
                }
              >
                Login
              </NavLink>
            </MenuItem>
            <MenuItem value="new-file-a">
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? `${HeaderStyle.nav_btn} ${HeaderStyle.active}`
                    : HeaderStyle.nav_btn
                }
              >
                Signup
              </NavLink>
            </MenuItem>
            <MenuItem value="new-win-a">
              <NavLink
                to="/commonpageone"
                className={({ isActive }) =>
                  isActive
                    ? `${HeaderStyle.nav_btn} ${HeaderStyle.active}`
                    : HeaderStyle.nav_btn
                }
              >
                Common Page One
              </NavLink>
            </MenuItem>
            <MenuItem value="open-file-a">
              <NavLink
                to="/commonpageone/commonpagetwo"
                className={({ isActive }) =>
                  isActive
                    ? `${HeaderStyle.nav_btn} ${HeaderStyle.active}`
                    : HeaderStyle.nav_btn
                }
              >
                Common Page Two
              </NavLink>
            </MenuItem>
            <MenuItem value="export-a">
              <NavLink
                to="/adminpageone"
                className={({ isActive }) =>
                  isActive
                    ? `${HeaderStyle.nav_btn} ${HeaderStyle.active}`
                    : HeaderStyle.nav_btn
                }
              >
                Admin Page One
              </NavLink>
            </MenuItem>
            <MenuItem value="export-b">
              <NavLink
                to="/adminpageone/adminpagetwo"
                className={({ isActive }) =>
                  isActive
                    ? `${HeaderStyle.nav_btn} ${HeaderStyle.active}`
                    : HeaderStyle.nav_btn
                }
              >
                Admin Page Two
              </NavLink>
            </MenuItem>
            <MenuItem value="export-c">
              <NavLink
                to="/userpageone"
                className={({ isActive }) =>
                  isActive
                    ? `${HeaderStyle.nav_btn} ${HeaderStyle.active}`
                    : HeaderStyle.nav_btn
                }
              >
                User Page One
              </NavLink>
            </MenuItem>
            <MenuItem value="export-d">
              <NavLink
                to="/userpageone/userpagetwo"
                className={({ isActive }) =>
                  isActive
                    ? `${HeaderStyle.nav_btn} ${HeaderStyle.active}`
                    : HeaderStyle.nav_btn
                }
              >
                User Page Two
              </NavLink>
            </MenuItem>
          </MenuContent>
        </MenuRoot>
      ) : (
        <></>
      )}
    </header>
  );
}

export default Header;
