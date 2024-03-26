import { Link, Head } from "@inertiajs/react"
import Navbar from "@/Components/Navbar"
import { usePage } from "@inertiajs/react"

export default function Home({ auth, laravelVersion }) {
  const { props } = usePage()
  const items = props.items || []

  return (
    <>
      <Head title="Home" />
      <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
        <div className="bg-white dark:bg-gray-800">
          <Navbar auth={auth} />
          <div className="bg-gray-700">
            <ul className="container mx-auto px-10 py-10">
              {items.map((item) => (
                <li key={item.id} className="my-3">
                  <strong>Judul: {item.title}</strong>
                  <p>Description: {item.description}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: {item.price}</p>
                </li>
              ))}
            </ul>
          </div>
          <footer className="py-5 text-center text-sm text-black dark:text-white/70">
            Laravel v{laravelVersion} by{" "}
            <Link className="hover:text-red-500/80" href="https://github.com/rizkyhaksono">
              Rizky Haksono
            </Link>
          </footer>
        </div>
      </div>
    </>
  )
}
