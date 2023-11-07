import React from "react";

function Navbar({ toggleLoading, handleSearchRes }) {
  function setSearch(e) {
    e.preventDefault();
    var query = document.getElementById("search").value;
    toggleLoading();
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&text=${query}&safe_search=1&format=json&nojsoncallback=1&per_page=10`
    )
      .then((response) => response.json())
      .then((json) => {
        var photos = [];
        json.photos.photo.forEach((photo) => {
          photos.push({
            title: photo.title,
            id: photo.id,
            url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`,
          });
        });
        toggleLoading();
        handleSearchRes(photos);
      });
  }

  return (
    <nav class="navbar navbar-dark bg-dark fixed-top mb-5">
      <div class="container-fluid">
        <form class="d-flex w-100 flex-column align-items-center justify-content-center">
          <h2 className="text-white">Search Photos</h2>
          <div className="d-flex flex-row gap-3 my-2">
            <input
              class="form-control me-2"
              type="search"
              id="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button
              class="btn btn-outline-success"
              type="submit"
              onClick={(e) => setSearch(e)}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
