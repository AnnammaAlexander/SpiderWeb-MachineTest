
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Eventrequestpage from "./pages/Eventrequestpage"

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path= "/" element={<Eventrequestpage/>}></Route>
    <Route path="/event" element={<Homepage/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
