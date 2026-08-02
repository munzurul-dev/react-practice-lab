import axios from "axios";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Suspense, useEffect, useState } from "react";
import AllPricingCard from "./Components/AllPricingCard/AllPricingCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
function App() {
  const [data, setData] = useState([]);
  const [navData, setNavData] = useState([]);
  const [pricingCardData, setPricingCardData] = useState([]);
  useEffect(() => {
    axios.get("/priceCard.json").then((pcResponse) => {
      setPricingCardData(pcResponse.data);
    });
  }, []);
  useEffect(() => {
    axios.get("/ReChart.json").then((UseData) => {
      setData(UseData.data);
    });
  }, []);
  useEffect(() => {
    axios.get("/Navbar.json").then((response) => {
      setNavData(response.data);
    });
  }, []);
  console.log(data);
  return (
    <>
      <div>
        <Navbar navData={navData}></Navbar>
        <Suspense fallback={<h2>Loading...</h2>}>
          <AllPricingCard pricingCardData={pricingCardData}></AllPricingCard>
        </Suspense>
        <div>
          <ResponsiveContainer width="100%" height="400">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
              <XAxis dataKey="month"></XAxis>
              <YAxis></YAxis>
              <Legend></Legend>
              <Tooltip></Tooltip>
              <Bar dataKey="sales" fill="#3b82f6" name="sales"></Bar>
              <Bar dataKey="orders" fill="#10b981" name="Orders" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default App;
