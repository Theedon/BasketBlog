import "./App.css";
import Landing from "./Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teams from "./Teams";
function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/teams" element={<Teams />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
