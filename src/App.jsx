import axios from "axios";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    axios.get("/Navbar.json").then((response) => {
      setNavData(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <Navbar navData={navData}></Navbar>
      </div>
    </>
  );
}

export default App;
