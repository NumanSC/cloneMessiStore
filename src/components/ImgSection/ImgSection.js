import React from "react";
import "./ImgSection.css";

// import ReactPlayer from "react-player";

function ImgSection() {
  // const playVideo = () => {
  //   document.querySelector(".flex-columns").style.display = "none";
  //   document.querySelector(".playVideo").style.display = "block";
  // };

  return (
    <div className="background">
      <div className="flex-columns backgroundImage">
        <div className="row">
          <div className="column-1">
            <h1>THE MESSI STORE</h1>
          </div>

          <div className="column-2">
            <img className="messibackground" src={require("./messibackground.webp")} alt="ds" />
          </div>
        </div>
        {/* <button className="prev" onClick={playVideo}>
          tıkla
        </button> */}
      </div>
      {/* <div className="playVideo">
        <ReactPlayer
          ref={ref}
          controls={false}
          playing={false}
          onReady={play}
          url="https://www.youtube.com/watch?v=aA3z7SvWmCI"
          config={{
            youtube: {
              playerVars: { showinfo: 0 },
            },
          }}
        />
      </div> */}
    </div>
  );
}

export default ImgSection;
