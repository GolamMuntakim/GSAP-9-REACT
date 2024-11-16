import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const App = () => {
  const boxRef = useRef()

useGSAP(()=>{
  gsap.from(boxRef.current,{
    x:300,
    opacity:0,
    rotate:720,
    duration:1,
    delay:1
  })
})
  return (
   <main>
    <div className="container">
      <div className="circle"></div>
      <div ref={boxRef} className="box"></div>
      </div>
      <div className="kuch">
        <div className="circle"></div>
        <div className="box"></div>
    </div>
   </main>
  )
}

export default App

