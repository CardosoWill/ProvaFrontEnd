import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Pagina from "../pages/Pag";

export default function Body() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}
