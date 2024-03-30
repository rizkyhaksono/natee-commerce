import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"

export default function Dashboard({ auth, items }) {
  const filteredItems = items.filter((item) => item.buyer_id === auth.user.id)

  return (
    <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">History Items</h2>}>
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            {filteredItems.map((item) => (
              <div key={item.id} className="p-6 text-gray-900">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Price: {item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
