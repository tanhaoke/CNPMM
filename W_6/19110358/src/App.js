import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { Edit, View, Create, Views } from "./post";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Views />} />
          <Route path="/posts/edit/:id" element={<Edit />} />
          <Route path="/posts/view/:id" element={<View />} />
          <Route path="/post/create" element={<Create />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
