import { Outlet, Route } from "react-router-dom";
import Selector from "../Selector";
import SpotDetail from "../SpotDetail";

function Spotlist() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default Spotlist;
