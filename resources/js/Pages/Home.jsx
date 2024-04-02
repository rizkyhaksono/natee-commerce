import { Link, Head } from "@inertiajs/react"
import Navbar from "@/Components/Navbar"
import { formatDate } from "@/Helpers/formatDate"
import { useState } from "react"
import Modal from "@/Components/Modal"

export default function Home({ auth, laravelVersion, items }) {
  const [selectedItem, setSelectedItem] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleItemClick = (itemId) => {
    const clickedItem = items.find((item) => item.id === itemId)
    if (clickedItem) {
      setSelectedItem(clickedItem)
      setIsModalOpen(true)
    }
  }

  const handleSaveToLocal = () => {
    const storedItems = JSON.parse(localStorage.getItem("selectedItems")) || []
    const updatedItems = [...storedItems, selectedItem]
    localStorage.setItem("selectedItems", JSON.stringify(updatedItems))
    setIsModalOpen(false)
  }

  return (
    <>
      <Head title="Home" />
      <div className="bg-gray-100 text-black/80">
        <Navbar auth={auth} />
        <ul className="max-w-7xl mx-auto px-10 py-10 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <li key={item.id} className="bg-white my-2 p-4 rounded-xl hover:shadow-lg transition duration-200" onClick={() => handleItemClick(item.id)}>
              <p className="text-lg font-extrabold px-2 py-1">{item.title}</p>
              <p className="text-sm px-2 py-1">{item.description}</p>

              <div className="pr-4">
                <label className="px-2 text-sm font-medium text-gray-900">Items</label>
                <input type="text" className="mx-2 my-1 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" value={item.quantity} disabled />

                <label className="px-2 text-sm font-medium text-gray-900">Price</label>
                <input type="text" className="mx-2 my-1 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" value={`Rp. ${item.price}`} disabled />
              </div>

              <div className="flex justify-between text-xs mt-5 py-1 gap-2 px-2">
                <p className="bg-green-300/50 rounded-xl px-3 py-2">Created: {formatDate(item.created_at)}</p>
                <p className="bg-yellow-300/50 rounded-xl px-3 py-2">Updated: {formatDate(item.updated_at)}</p>
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

        <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {auth.user ? (
            selectedItem && (
              <div className="px-6 py-4 text-center">
                <p className="text-lg font-semibold">
                  {selectedItem.title} - Rp. {selectedItem.price}
                </p>
                <div className="flex justify-evenly mt-4 gap-10">
                  <button className="bg-green-400 py-1 w-full rounded-xl text-white hover:bg-green-600 duration-200 transition" onClick={handleSaveToLocal}>
                    Add to Cart
                  </button>
                  <button className="bg-red-400 py-1 w-full rounded-xl text-white hover:bg-red-600 duration-200 transition" onClick={() => setIsModalOpen(false)}>
                    Close
                  </button>
                </div>
              </div>
            )
          ) : (
            <div className="flex flex-col text-center items-start px-6 py-4 w-full">
              <div className="">
                You are not logged in yet. <span className="underline decoration-1 underline-offset-2">Register or login first, so you can buy these item</span>
              </div>
              <button className="bg-red-400 px-3 py-1 rounded-xl text-white mt-4 hover:bg-red-600 duration-200 transition" onClick={() => setIsModalOpen(false)}>
                Close
              </button>
            </div>
          )}
        </Modal>
      </div>
    </>
  )
}
