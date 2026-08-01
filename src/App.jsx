import axios from "axios";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Suspense, useEffect, useState } from "react";
import AllPricingCard from "./Components/AllPricingCard/AllPricingCard";

function App() {
  const [navData, setNavData] = useState([]);
  const [pricingCardData, setPricingCardData] = useState([]);
  useEffect(() => {
    axios.get("/priceCard.json").then((pcResponse) => {
      setPricingCardData(pcResponse.data);
    });
  }, []);
  useEffect(() => {
    axios.get("/Navbar.json").then((response) => {
      setNavData(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <Navbar navData={navData}></Navbar>
        <Suspense fallback={<h2>Loading...</h2>}>
          <AllPricingCard pricingCardData={pricingCardData}></AllPricingCard>
        </Suspense>
      </div>
    </>
  );
}

export default App;
