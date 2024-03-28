import { Link } from "@inertiajs/react"

export default function Navbar({ auth }) {
  return (
    <nav className="py-3 shadow-md text-black/80 font-bold">
      {auth.user ? (
        <Link href={route("dashboard")} className="container mx-auto flex justify-end rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-black focus:outline-none">
          Dashboard
        </Link>
      ) : (
        <div className="flex justify-end gap-2 container mx-auto">
          <Link href={route("login")} className="bg-gray-200 hover:bg-gray-700 rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-white">
            Log in
          </Link>
          <Link href={route("register")} className="rounded-md px-3 py-2 border-black/40 border ring-1 ring-transparent transition hover:text-black">
            Register
          </Link>
        </div>
      )}
    </nav>
  )
}
