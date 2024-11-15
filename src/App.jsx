import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const App = () => {
  useGSAP(()=>{
    gsap.to(".box", {})
  })
  return (
   <main>
    <div className="box">

    </div>
   </main>
  )
}

export default App

