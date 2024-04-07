import { useEffect } from "react"
import { getCabins } from "../services/apiCabin"


export default function Cabins() {

  useEffect(() => {
    getCabins().then((data) => console.log(data))
  }, [])

  return (
    <div>Cabins</div>
  )
}
