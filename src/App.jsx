import Details from "./components/Details"
import Presentacion from "./components/Presentacion"
import Regalos from "./components/Regalos"
import gift from "./assets/list/gift.json"
import { Route, Routes } from "react-router-dom"
import PATHROUTES from "./helpers/PathRoutes.helper"

function App() {
  return (
    <div>
      <div className="flex justify-center"><Presentacion/></div>
      <Routes>
        <Route path={PATHROUTES.LANDING} element={<Regalos/>}></Route>
        <Route path={PATHROUTES.DETAIL} element={<Details gifts={gift}/>}></Route>
      </Routes>
    </div>
  )
};


export default App
