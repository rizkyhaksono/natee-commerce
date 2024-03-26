import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"
import { usePage } from "@inertiajs/react"

export default function Dashboard({ auth }) {
  const { props } = usePage()
  const items = props.items || []

  return (
    <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}>
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <ul>
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
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
