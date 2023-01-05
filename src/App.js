import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Details from "./Pages/Details";
import Collection from "./Pages/Collection";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/nft/:id" element={<Details />} />
          <Route path="/collection" element={<Collection/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
