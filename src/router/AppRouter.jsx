import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Housing from "../pages/Housing.jsx";
import NotFound from "../pages/NotFound.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/logement/:id" element={<Housing />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
