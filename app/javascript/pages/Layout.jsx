// import 'flowbite';
import { Link, usePage } from '@inertiajs/react'
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function Layout({children}) {

  const { user }  = usePage().props;
  return (
    <>
      <Navbar fluid>
        <NavbarBrand href="https://flowbite-react.com">
          {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <DropdownHeader>
              {/* <span className="block truncate text-sm font-medium">{user.user_name}</span> */}
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
            <NavbarLink href="/" as={Link} active>
              Home
            </NavbarLink>
          <NavbarLink as={Link} href="/chat_rooms">Chat Rooms</NavbarLink>
          <NavbarLink href="#">My Chat Rooms</NavbarLink>
          <NavbarLink href="#">Create Chat Room</NavbarLink>
          {/* <NavbarLink href="#">Contact</NavbarLink> */}
        </NavbarCollapse>
      </Navbar>
      <div className="m-8">
        {children}
      </div>
    </>
  );
}
