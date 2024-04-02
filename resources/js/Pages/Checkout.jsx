import { useState } from "react"
import { Link, Head } from "@inertiajs/react"
import { router } from "@inertiajs/react"

export default function Checkout() {
  const [selectedItems, setSelectedItems] = useState(JSON.parse(localStorage.getItem("selectedItems")) || [])

  const handleRemoveItem = (index) => {
    const updatedItems = selectedItems.filter((_, idx) => idx !== index)
    setSelectedItems(updatedItems)
    localStorage.setItem("selectedItems", JSON.stringify(updatedItems))
  }

  const handleCheckout = (e) => {
    e.preventDefault()
    router.post("/items", { items: selectedItems })
  }

  return (
    <>
      <Head title="Checkout" />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Checkout</h2>
        <ul className="space-y-4">
          {selectedItems.map((item, index) => (
            <li key={index} className="flex items-center justify-between bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500">Rp. {item.price}</p>
                </div>
              </div>
              <button onClick={() => handleRemoveItem(index)}>
                <span className="text-red-500 font-semibold">Remove</span>
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
    </>
  )
}
