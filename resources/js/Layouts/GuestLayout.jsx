import { Link } from "@inertiajs/react"

export default function Guest({ children }) {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-white">
      <>
        <Link href="/">
          <img src="illustration.png" className="w-60 h-60" />
        </Link>
      </>

      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-gray-50 shadow-md overflow-hidden sm:rounded-lg">{children}</div>
    </div>
  )
}
