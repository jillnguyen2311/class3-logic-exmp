import { useState } from "react"

export default function AllowValues() {
const [pill, setPill] = useState<"red" | "blue">();

    return(
    <>
    <button onClick={()=> setPill("red")}>red pill</button>
    <button onClick={()=> setPill("blue")}>blue pill</button>
    <div>u choose {pill} pill!</div>
    </>
    )
}