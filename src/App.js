import "./App.css";
import Landing from "./Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teams from "./Teams";
import Navbar from "./Navbar";
import { useState } from "react";
import TeamInfo from "./TeamInfo";
import Players from "./Players";
import PlayerInfo from "./PlayerInfo";
function App() {
  const [value, setValue] = useState(0);
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar value={value} handleChange={handleChange} />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/teams" element={<Teams />}></Route>
          <Route path="/team/:id" element={<TeamInfo />}></Route>
          <Route path="/players" element={<Players />}></Route>
          <Route path="/player/:id" element={<PlayerInfo />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
