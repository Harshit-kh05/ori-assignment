import React, { useEffect } from "react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./Image";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    console.log("chala");
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=a856b9dec52b4f412babb3c0575f68d7&format=json&nojsoncallback=1&per_page=6&page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        var photos = [];
        json.photos.photo.forEach((photo) => {
          photos.push({
            title: photo.title,
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

  return (
    <InfiniteScroll
      dataLength={images.length} //This is important field to render the next data
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
            allowFullScreen
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
              <Image key={idx} url={image.url} title={image.title} />
            ))
          : ""}
      </div>
    </InfiniteScroll>
  );
}

export default Gallery;
