import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import CreateCollection from "./Pages/CreateCollection";
import Details from "./Pages/Details";
import Create from "./Pages/Create";

import Barchart from "./components/Barchart";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/nft/:id" element={<Details />} />
          <Route path="/collection" element={<CreateCollection/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
