import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./Image";

function Gallery({ searchRes, searchLoading }) {
  const [images, setImages] = useState([]);
  const [loaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${process.env.REACT_APP_API_KEY}&format=json&nojsoncallback=1&per_page=6&page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        var photos = [];
        json?.photos?.photo.forEach((photo) => {
          photos.push({
            title: photo.title,
            id: photo.id,
            url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`,
          });
        });
        setImages([...images, ...photos]);
        setPage(page + 1);
        setIsLoaded(true);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // If search is not in loading stage and searchRes is empty show default view
  if (searchLoading === false && searchRes.length === 0) {
    return (
      <div className="mt-5 pt-5">
        <InfiniteScroll
          className="mt-5"
          dataLength={images.length}
          next={() => fetchData()}
          hasMore={true}
          loader={
            <div className="text-center">
              <iframe
                src="https://giphy.com/embed/l4FGKbWgkhHVGXzTW"
                width="200"
                height="200"
                frameBorder="0"
                class="giphy-embed"
                title="loader"
              ></iframe>
            </div>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="row">
            {loaded
              ? images.map((image, idx) => (
                  <Image
                    key={idx}
                    id={image.id}
                    url={image.url}
                    title={image.title}
                  />
                ))
              : ""}
          </div>
        </InfiniteScroll>
      </div>
    );
  } else if (searchLoading || searchRes.length !== 0) {
    return (
      <div className="mt-5 pt-5">
        <div className="row mt-5">
          {searchLoading ? (
            <iframe
              src="https://giphy.com/embed/l4FGKbWgkhHVGXzTW"
              width="200"
              height="200"
              frameBorder="0"
              class="giphy-embed"
              title="loader"
            ></iframe>
          ) : (
            searchRes.map((image, idx) => (
              <Image
                key={idx}
                id={image.id}
                url={image.url}
                title={image.title}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Gallery;
