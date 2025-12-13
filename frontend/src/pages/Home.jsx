import Nav from "../components/layout/Nav";
import Body from "../components/ui/Body";
import { FaArrowCircleRight } from "react-icons/fa";
import bgVideo from "../assets/video.mp4";
import qualifiedImg from "../assets/Qualified.png";

const Home = () => {
  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div style={{ color: "white" }}>
        <Nav />

        <div className="py-10">
          <div className="body gap-20">
            <div>
              <p className="body-text text-7xl">FUTURE-READY,</p>
              <p className="body-text text-7xl">SMART LEARNING</p>
            </div>

            <div className="flex gap-50">
              <div className="buttons flex items-center gap-10">
                <p>Get Started</p>
                <FaArrowCircleRight size={40} />
              </div>
              <div className="buttons flex items-center gap-5">
                <p>Explore More</p>
                <FaArrowCircleRight size={40} />
              </div>
            </div>
          </div>
        </div>

        <Body />

        <div className="wrapper pb-100">
          <div className="box">
            <p className="text-black text-center text-6xl pt-10">
              NEXUS IS BUILT ON
            </p>

            <div className="px-100 py-20">
              <img src={qualifiedImg} alt="Qualified" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
