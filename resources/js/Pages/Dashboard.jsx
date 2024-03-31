import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"

export default function Dashboard({ auth, items }) {
  const filteredItems = items.filter((item) => item.buyer_id === auth.user.id)

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="sm:rounded-lg flex gap-10">
            {filteredItems.map((item, index) => (
              <div key={item.id} className="bg-white rounded-xl text-gray-900 px-6 py-4 hover:shadow-lg transition duration-200">
                <h3>
                  {++index}. {item.title}
                </h3>
                <p>Price: {item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
