import React from "react";
import HeaderStyle from "./Header.module.css";
import { NavLink } from "react-router";
import { Button } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { useAuth } from "../hooks/useAuth";
import AvatarUi from "./ui/avatar";
function Header() {
  let { isLoggedIn } = useAuth();
  return (
    <header>
      {isLoggedIn ? (
        <>
          <h1>Protected page</h1>
          <div className={HeaderStyle.headerContainer}>
            <MenuRoot>
              <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Navigation
                </Button>
              </MenuTrigger>

              <MenuContent>
                <MenuItem value="new-win-a">
                  <NavLink
                    to="commonpageone"
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
                    to="commonpagetwo"
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
                    to="adminpageone"
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
                    to="adminpagetwo"
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
                    to="userpageone"
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
                    to="userpagetwo"
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
            <AvatarUi
              user={{
                id: "2",
                name: "Melissa Jones",
                email: "melissa.jones@example.com",
                avatar: "https://i.pravatar.cc/300?u=po",
              }}
            />
          </div>
        </>
      ) : (
        <h1>Unprotected page</h1>
      )}
    </header>
  );
}

export default Header;
