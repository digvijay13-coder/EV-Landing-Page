import Home from "./MyComp/Home"
import {Route,Routes} from "react-router-dom"
import About from "./MyComp/About"
import Models from "./MyComp/Models"


function App() {
 

  return (
    <>
   
    
     <Routes>
     <Route path="/" element={ <Home></Home>} ></Route>
      <Route path="/about" element={<About></About>} ></Route>
      <Route path="/models" element={<Models></Models>}  ></Route>
      

     </Routes>
     
     
    </>
  )
}


export default App