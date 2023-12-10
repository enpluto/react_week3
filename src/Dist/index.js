import { Outlet } from "react-router-dom";
import Selector from "../Selector";
import SpotDetail from "../SpotDetail";

function Dist() {
  return (
    <main>
      <Outlet />
      <Selector />
    </main>
  );
}

export default Dist;
