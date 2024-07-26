"use client";
import ReactPlayer from "react-player";

function SecondVideo({ url }) {
  return (
    <>
      <ReactPlayer
        className="mx-auto blog-videos"
        controls
        width="100"
        height="100"
        url={url || ""}
      />
    </>
  );
}

export default SecondVideo;
