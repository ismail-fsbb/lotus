import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import useReveal from "../animation/UseReveal";

export default function MainLayout() {
  useReveal();
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
