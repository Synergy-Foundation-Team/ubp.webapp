"use client";

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NavbarUI: React.FC = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  }

  return (
    <Navbar shouldHideOnScroll isBordered>
      <NavbarBrand>
        <Image src="/assets/UBP_LOGO.svg" width={70} height={70} alt="UBP LOGO OF THIS WEB SITE" />
        <p className="font-bold text-inherit">Ubon Bio Power</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" onClick={handleLogin}>
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarUI;
