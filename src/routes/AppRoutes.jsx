import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../layout/Body";
import Pagina from "../pages/Pag";
import MuayThai from "../pages/MuayThai";
import Formulario from "../pages/Formulario";

export default function AppRoutes() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Body />}>
          <Route path="/pagina" element={<Pagina />} />
          <Route path="/muaythai" element={<MuayThai />} />
          <Route path="/formulario" element={<Formulario />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}
