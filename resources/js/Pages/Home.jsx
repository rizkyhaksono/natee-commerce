import { Link, Head } from "@inertiajs/react"
import Navbar from "@/Components/Navbar"
import { formatDate } from "@/Helpers/formatDate"

export default function Home({ auth, laravelVersion, items }) {
  return (
    <>
      <Head title="Home" />
      <div className="bg-gray-50 text-black/80 h-screen">
        <Navbar auth={auth} />
        <ul className="container mx-auto px-10 py-10 grid xl:grid-cols-3 gap-4">
          {items.map((item) => (
            <li key={item.id} className="bg-gray-100/50 my-3 p-5 rounded-xl">
              <p className="text-lg font-extrabold px-2 py-1">{item.title}</p>
              <p className="text-sm px-2 py-1">{item.description}</p>
              <p className="mt-5 px-2 py-1">{item.quantity} Item</p>
              <p className="bg-green-300/50 w-fit rounded-xl px-2 py-1">Rp. {item.price}</p>
              <div className="flex justify-between px-2 py-1">
                <p>Created: {formatDate(item.created_at)}</p>
                <p>Updated: {formatDate(item.updated_at)}</p>
              </div>
            </li>
          ))}
        </ul>
        <footer className="py-5 text-center text-sm text-black">
          Laravel v{laravelVersion} by{" "}
          <Link className="hover:text-orange-500/80" href="https://github.com/rizkyhaksono">
            Rizky Haksono
          </Link>
        </footer>
      </div>
    </>
  )
}
