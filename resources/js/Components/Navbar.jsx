import { Link } from "@inertiajs/react"

export default function Navbar({ auth }) {
  return (
    <nav className="flex flex-1 items-end justify-end py-3">
      {auth.user ? (
        <Link
          href={route("dashboard")}
          className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
        >
          Dashboard
        </Link>
      ) : (
        <>
          <Link
            href={route("login")}
            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
          >
            Log in
          </Link>
          <Link
            href={route("register")}
            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
          >
            Register
          </Link>
        </>
      )}
    </nav>
  )
}
