import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Restaurante from "../pages/restaurante";

export default function Body() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}
