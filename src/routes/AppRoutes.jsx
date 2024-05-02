import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicial from "../pages/Inicial";
import Body from "../layout/Body";
import Restaurante from "../pages/restaurante";
import Produtos from "../pages/Produtos"

export default function AppRoutes() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Restaurante />} />
          <Route path="/produtos" element={<Produtos />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
