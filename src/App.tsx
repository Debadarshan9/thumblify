import "./App.css";
import LenisScroll from "./components/lenisScroll/LenisScroll";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Generate from "./pages/Generate";
import MyGeneration from "./pages/MyGeneration";
import YtPreview from "./pages/YtPreview";
import Layout from "./layout/Layout";
function App() {
  return (
    <div className="app">
      <LenisScroll />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/generation" element={<Generate />} />
          <Route path="/generation/:id" element={<Generate />} />
          <Route path="/my-generation" element={<MyGeneration />} />
          <Route path="/preview" element={<YtPreview />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
