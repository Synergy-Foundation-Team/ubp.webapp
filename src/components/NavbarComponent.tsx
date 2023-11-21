"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import SignInButton from "./SignInButton";

const NavbarUI: React.FC = () => {
  return (
    <Navbar shouldHideOnScroll isBordered maxWidth="2xl">
      <NavbarBrand>
        <p className="font-bold text-2lx text-amber-500 flex">Ubon Bio Power</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <SignInButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarUI;
