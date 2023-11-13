import logo from "./logo.svg";
import "./App.css";
import CatIndex from "./components/catindex";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/cat" element={<CatIndex />}></Route>
          <Route path="*" element={<h1>not a page</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
