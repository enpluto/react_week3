import { Outlet } from "react-router-dom";
import { Main } from "./styled";
import Selector from "../Selector";
import SpotDetail from "../SpotDetail";

function Distlist() {
  return (
    <Main>
      <h1>景點介紹</h1>
      <Outlet />
    </Main>
  );
}

export default Distlist;
