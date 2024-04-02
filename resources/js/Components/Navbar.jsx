import { Link } from "@inertiajs/react"
import Dropdown from "@/Components/Dropdown"
import { FaCartShopping } from "react-icons/fa6"
import NavLink from "./NavLink"
import { usePage } from "@inertiajs/react"
import { useState, useEffect } from "react"

export default function Navbar({ auth }) {
  const { url } = usePage()
  const [selectedItems, setSelectedItems] = useState(JSON.parse(localStorage.getItem("selectedItems")) || [])

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "selectedItems") {
        setSelectedItems(JSON.parse(event.newValue) || [])
      }
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  return (
    <nav className="bg-white shadow-sm text-black/80 font-bold">
      {auth.user ? (
        <div className="max-w-7xl py-1 px-4 flex items-center mx-auto justify-between sm:px-6 lg:px-8">
          <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
            <Link href={route("home")}>
              <img src="illustration.png" className="w-14 h-14" />
            </Link>
            <NavLink href={route("home")} active={url == "/"}>
              Home
            </NavLink>
            <NavLink href={route("dashboard")} active={url == "/dashboard"}>
              Dashboard
            </NavLink>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ms-6">
            <Link href={route("checkout")}>
              <FaCartShopping />
              {selectedItems && selectedItems.length > 0 && <span className="absolute top-4 ml-2 bg-red-500 text-white px-1 rounded-full text-xs">{selectedItems.length}</span>}
            </Link>
            <div className="ms-3 relative">
              <Dropdown>
                <Dropdown.Trigger>
                  <span className="inline-flex rounded-md">
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                    >
                      {auth.user.name}

                      <svg className="ms-2 -me-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </span>
                </Dropdown.Trigger>

                <Dropdown.Content>
                  <Dropdown.Link href={route("profile.edit")}>Profile</Dropdown.Link>
                  <Dropdown.Link href={route("logout")} method="post" as="button">
                    Log Out
                  </Dropdown.Link>
                </Dropdown.Content>
              </Dropdown>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-6xl py-1 px-4 mx-auto flex justify-between items-center">
          <Link href={route("home")}>
            <img src="illustration.png" className="w-14 h-14" />
          </Link>
          <div className="space-x-2">
            <Link href={route("login")} className="bg-gray-200 hover:bg-gray-700 rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-white">
              Log in
            </Link>
            <Link href={route("register")} className="rounded-md px-3 py-2 border-black/40 border ring-1 ring-transparent transition hover:text-black hover:border-black hover:border-opacity-100">
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
