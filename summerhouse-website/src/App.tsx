import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import RevolvingDemo from "./pages/RevolvingDemo";
import AssemblyDemo from "./pages/AssemblyDemo";
import BoltonAndPaul from "./pages/BoltonAndPaul";
import GoingInternational from "./pages/GoingInternational";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="products" element={<Products />} />
        <Route path="revolving-demo" element={<RevolvingDemo />} />
        <Route path="assembly-demo" element={<AssemblyDemo />} />
        <Route path="bolton-and-paul" element={<BoltonAndPaul />} />
        <Route path="going-international" element={<GoingInternational />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
