import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "./components/FetchItems";
import LoadingSpinner from "./components/LoadingSpinner";
import { useSelector } from "react-redux";
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header></Header>
      <FetchItems />
      {fetchStatus.currentFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer></Footer>
      <script src="data/items.js"></script>
      <script src="scripts/index.js"></script>
    </>
  );
}

export default App;
