import React from "react";
import HeaderStyle from "./Header.module.css";
import { NavLink } from "react-router";
import { Button } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
function Header() {
  return (
    <header>
      <h1>Authentication</h1>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="new-txt-a">
            <NavLink to="/">Login</NavLink>
          </MenuItem>
          <MenuItem value="new-file-a">
            <NavLink to="/signup">Signup</NavLink>
          </MenuItem>
          <MenuItem value="new-win-a">
            <NavLink to="/commonpageone">Common Page One</NavLink>
          </MenuItem>
          <MenuItem value="open-file-a">
            <NavLink to="/commonpageone/commonpagetwo">Common Page Two</NavLink>
          </MenuItem>
          <MenuItem value="export-a">
            <NavLink to="/adminpageone">Admin Page One</NavLink>
          </MenuItem>
          <MenuItem value="export-b">
            <NavLink to="/adminpageone/adminpagetwo">Admin Page Two</NavLink>
          </MenuItem>
          <MenuItem value="export-c">
            <NavLink to="/userpageone">User Page One</NavLink>
          </MenuItem>
          <MenuItem value="export-d">
            <NavLink to="/userpageone/userpagetwo">User Page Two</NavLink>
          </MenuItem>
        </MenuContent>
      </MenuRoot>
    </header>
  );
}

export default Header;
