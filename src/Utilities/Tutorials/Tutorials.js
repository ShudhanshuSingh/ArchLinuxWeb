import React from "react";
import Video from "../Video/Video";
import data from "./VideoData.json";

function Tutorials() {
  const [videoData,setVideoData] = React.useState(data.data)
  console.log(videoData);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {
              videoData.map((video) => (
                <Video key={video.id} title={video.title} type={video.type} desc={video.desc} link={video.link} />
              ))
          }
        

      </div>
    </div>
  );
}

export default Tutorials;
