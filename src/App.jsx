import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CreateBook } from "./pages/CreateBook";
import { ShowBook } from "./pages/ShowBook";
import { UpdateBook } from "./pages/UpdateBook";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/detail/:id" element={<ShowBook />} />
      <Route path="/books/update/:id" element={<UpdateBook />} />
    </Routes>
  );
}

export default App;
