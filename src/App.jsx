import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Days from "@/pages/Days";
import Food from "@/pages/Food";
import MomAndPop from "@/pages/MomAndPop";
import JazzCafes from "@/pages/JazzCafes";
import Bars from "@/pages/Bars";
import Poke from "@/pages/Poke";
import Halloween from "@/pages/Halloween";
import Entry from "@/pages/Entry";
import CheckIn from "@/pages/CheckIn";
import Notes from "@/pages/Notes";
import Translate from "@/pages/Translate";
import Table from "@/pages/Table";
import Watches from "@/pages/Watches";
import MapPage from "@/pages/MapPage";

const baseUrl = import.meta.env.BASE_URL ?? "/";
const basename = baseUrl === "/" ? undefined : baseUrl.replace(/\/$/, "");

function App() {
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/days" element={<Days />} />
          <Route path="/food" element={<Food />} />
          <Route path="/mom-and-pop" element={<MomAndPop />} />
          <Route path="/jazz-cafes" element={<JazzCafes />} />
          <Route path="/bars" element={<Bars />} />
          <Route path="/poke" element={<Poke />} />
          <Route path="/halloween" element={<Halloween />} />
          <Route path="/entry" element={<Entry />} />
          <Route path="/check-in" element={<CheckIn />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/table" element={<Table />} />
          <Route path="/watches" element={<Watches />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
