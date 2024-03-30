import { Link } from "@inertiajs/react"

export default function Navbar({ auth }) {
  return (
    <nav className="py-1 shadow-md text-black/80 font-bold">
      {auth.user ? (
        <div className="flex items-center container mx-auto justify-between">
          <img src="illustration.png" className="w-14 h-14" />
          <Link href={route("dashboard")} className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-black focus:outline-none">
            Dashboard
          </Link>
        </div>
      ) : (
        <div className="container mx-auto flex justify-between items-center">
          <img src="illustration.png" className="w-14 h-14" />
          <div className="space-x-2">
            <Link href={route("login")} className="bg-gray-200 hover:bg-gray-700 rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-white">
              Log in
            </Link>
            <Link href={route("register")} className="rounded-md px-3 py-2 border-black/40 border ring-1 ring-transparent transition hover:text-black">
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
