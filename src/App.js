import "./App.css";
import Landing from "./Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teams from "./Teams";
import Navbar from "./Navbar";
import { useState } from "react";
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
