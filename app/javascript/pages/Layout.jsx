// import 'flowbite';
import { Link, usePage } from '@inertiajs/react'
import { useState, useRef, useEffect } from 'react';
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
  Alert
} from "flowbite-react";

const navLinks = {
  "Home" : "/",
  "Chat Rooms" : "/chat_rooms",
  "Create Chat Room" : "/chat_rooms/new"
}

export default function Layout({children}) {
  const { user, flash }  = usePage().props;
  const { url } = usePage()
  const [showAlert, setShowAlert] = useState({})

  useEffect(() => {
    setShowAlert(flash)
  }, [flash])

  function renderAlert(){
    if (Object.keys(showAlert).length === 0 ) { return }
    return (
      <Alert className="w-full my-6" color={Object.keys(showAlert)[0]} onDismiss={removeAlert}>
        {Object.values(showAlert)[0]}
      </Alert>
    )
  }

  function removeAlert() {
    setShowAlert({})
  }
  console.log("Flash ->", flash)
  return (
    <>
      <Navbar fluid>
        <NavbarBrand href="https://github.com/RTBlanco/r-and-r-chat">
          {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">R & R</span>
        </NavbarBrand>
        {!user || (
          <>
            <div className="flex md:order-2">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                }
              >
                <DropdownHeader>
                  <span className="block truncate text-sm font-medium">{user.user_name}</span>
                </DropdownHeader>
                <DropdownItem as={Link} href={`/users/${user.id}/edit`}>Settings</DropdownItem>
                <DropdownDivider />
                <DropdownItem as={Link} method='delete' href='/users/sign_out'>Sign out</DropdownItem>
              </Dropdown>
              <NavbarToggle />
            </div>
            <NavbarCollapse>
              {Object.entries(navLinks).map(([key, val], index) => (
                <NavbarLink key={index} href={val} as={Link} active={url === val}>{key}</NavbarLink>
              ))}
            </NavbarCollapse>
          </>
        )}
      </Navbar>
      {renderAlert()}
      <div className="m-6 h-[86vh]">
        {children}
      </div>
    </>
  );
}
