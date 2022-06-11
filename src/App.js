import axios from "axios";
import TableCoins from "./components/TableCoins";
import { React, useEffect, useState } from "react";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const getCoins = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getCoins();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <input
          type="text"
          placeholder="Search a Coin"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />

        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;