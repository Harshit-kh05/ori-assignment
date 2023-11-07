import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <form class="d-flex w-100 flex-column align-items-center justify-content-center">
          <h2 className="text-white">Search Photos</h2>
          <div className="d-flex flex-row gap-3 my-2">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
