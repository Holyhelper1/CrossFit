import { useRef, useState } from "react";
import Poster_video from "../../assets/images/video-img.jpg";
import { ViewMoreButton } from "../View-more-button/View-more-button";
export const JoinUs = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="join-us">
      <div className="join-us-video-wrapper">
        <video
          ref={videoRef}
          className="join-us-video"
          src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/msqd2XJ/sportswoman-and-bodybuilder-doing-inclined-bench-press_h6lniiwx__0d40dde2616befce699ff03e74a901d3__P360.mp4"
          width="960"
          height="600"
          poster={Poster_video}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        ></video>
        <button
          className="join-us-video-play-button"
          type="button"
          onClick={handlePlayPause}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <div className="join-us-body container">
        <h2 className="join-us-title">Join us</h2>
        <form className="join-us-form">
          <header className="join-us-form-header">
            <h3
              className="join-us-form-title backdrop-title centered title-big"
              data-title="Go!"
            >
              Start here
            </h3>
            <div className="join-us-form-subtitle section-description">
              fill the form below to start your journey
            </div>
          </header>
          <div className="join-us-form-body">
            <label className="visually-hidden" htmlFor="username">
              Name
            </label>
            <input
              className="join-us-form-input input"
              id="username"
              placeholder="Name"
            />
            <label className="visually-hidden" htmlFor="email">
              Email
            </label>
            <input
              className="join-us-form-input input"
              id="email"
              placeholder="Email"
              type="email"
            />
            <ViewMoreButton link={"#"} children={`Subscribe`} />
          </div>
        </form>
      </div>
    </div>
  );
};
