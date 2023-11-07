
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import "./App.css"
import { useState } from "react";


function App() {

  const [searchLoading, setSearchLoading] = useState(false)
  const [searchRes, setSearchRes] = useState([])

  function toggleLoading() {
    if (searchLoading)
      setSearchLoading(false)
    else
      setSearchLoading(true)
  }

  function handleSearchRes(res) {
    setSearchRes(res)
  }

  return (
    <>
      <Navbar toggleLoading={toggleLoading} handleSearchRes={handleSearchRes} />
      <Gallery searchRes={searchRes} searchLoading={searchLoading} />
    </>
  );
}

export default App;
