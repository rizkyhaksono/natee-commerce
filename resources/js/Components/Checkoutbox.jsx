import { Link } from "@inertiajs/react"
import { FaCartShopping } from "react-icons/fa6"

export default function CheckoutBox() {
  return (
    <>
      <Link href={route("checkout")}>
        <FaCartShopping />
      </Link>
    </>
  )
}
