import { useState } from "react"
import { Link, Head } from "@inertiajs/react"

export default function Checkout() {
  const [selectedItems, setSelectedItems] = useState(JSON.parse(localStorage.getItem("selectedItems")) || [])

  const handleRemoveItem = (itemId) => {
    const updatedItems = selectedItems.filter((item) => item.id !== itemId)
    setSelectedItems(updatedItems)
    localStorage.setItem("selectedItems", JSON.stringify(updatedItems))
  }

  return (
    <>
      <Head title="Checkout" />
      <div>
        <h2>Checkout Page</h2>
        <ul>
          {selectedItems.map((item) => (
            <li key={item.id}>
              {item.title} - Rp. {item.price}
              <button onClick={() => handleRemoveItem(item.id)}>
                <span className="bg-red-400 ml-2 rounded-lg px-2 py-1">Remove</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
