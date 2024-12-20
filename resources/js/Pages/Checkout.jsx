import { useState } from "react"
import { Head, router, Link } from "@inertiajs/react"
import Modal from "@/Components/Modal"

export default function Checkout() {
  const [selectedItems, setSelectedItems] = useState(JSON.parse(localStorage.getItem("selectedItems")) || [])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [itemIndexToRemove, setItemIndexToRemove] = useState(null)

  const handleRemoveItem = (index) => {
    setItemIndexToRemove(index)
    setIsModalOpen(true)
    console.log("Remove index : ", index)
  }

  const handleConfirmRemove = () => {
    const updatedItems = selectedItems.filter((_, idx) => idx !== itemIndexToRemove)
    setSelectedItems(updatedItems)
    localStorage.setItem("selectedItems", JSON.stringify(updatedItems))
    setIsModalOpen(false)
  }

  const handleCheckout = (e) => {
    e.preventDefault()
    // router.post("/items", { items: selectedItems })
    console.log("Items checked out:", selectedItems)
  }

  return (
    <>
      <Head title="Checkout" />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link className="text-3xl font-bold mb-4 w-fit" href={route("dashboard")}>
          Checkout
        </Link>
        <ul className="space-y-4">
          {selectedItems.map((item, index) => (
            <li key={index} className="flex items-center justify-between bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500">Rp. {item.price}</p>
                </div>
              </div>
              <button className="text-red-500 font-semibold" onClick={() => handleRemoveItem(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        {selectedItems.length === 0 && <p className="text-center mt-8 text-gray-500">No items in your cart.</p>}
        <div className="flex justify-end mt-8">
          <button onClick={handleCheckout} className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-4 text-center">
          <div>Remove Item</div>
          <div>Are you sure you want to remove this item from your cart?</div>
          <div className="flex justify-between px-4">
            <button>Yes</button>
            <button>No</button>
          </div>
        </div>
      </Modal>
    </>
  )
}
