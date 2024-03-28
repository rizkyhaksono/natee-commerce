import { format } from "date-fns"

export const formatDate = (timestamp) => {
  return format(new Date(timestamp), "MMMM dd yyyy")
}
