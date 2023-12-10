import { Routes, Route } from "react-router-dom";

import ResetStyle from "./css/ResetStyle.js";
import GlobalStyle from "./css/GlobalStyle.js";

import Layout from "./Layout";
import Dist from "./Dist";
import Distlist from "./Distlist/index";
import SpotDetail from "./SpotDetail";
import FAQ from "./components/FAQ";

function Home() {
  return (
    <>
      <main>
        <h2>歡迎來高雄旅遊！</h2>
        <h2>Welcome to Kaohsiung!</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Emblem_of_Kaohsiung_City.svg"
          alt="KH City Logo"
          width="200"
        />
      </main>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <ResetStyle />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/spotlist" element={<Distlist />}>
            <Route index element={<Dist />} />
            <Route path=":Id" element={<SpotDetail />} />
          </Route>
          <Route path="/faq" element={<FAQ />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
