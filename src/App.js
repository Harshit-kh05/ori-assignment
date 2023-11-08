
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import "./App.css"
import { useState } from "react";


function App() {

  const [searchLoading, setSearchLoading] = useState(false)
  const [searchRes, setSearchRes] = useState([])

  function startLoading() {
    setSearchLoading(true)
  }

  function stopLoading() {
    setSearchLoading(false)
  }


  function handleSearchRes(res) {
    setSearchRes(res)
  }

  return (
    <>
      <Navbar startLoading={startLoading} stopLoading={stopLoading} handleSearchRes={handleSearchRes} />
      <Gallery searchRes={searchRes} searchLoading={searchLoading} />
    </>
  );
}

export default App;
