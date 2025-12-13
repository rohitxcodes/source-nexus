// import { useState } from "react";

// import "./App.css";
// import "./index.css";
// import { FaArrowCircleRight } from "react-icons/fa";
// import Body from "./components/ui/Body";
// import Nav from "./components/layout/Nav";

// function App() {
  // const [count, setCount] = useState(0);

  // return (
  //   <div
  //     style={{
  //       position: "relative",
  //       width: "100%",
  //       height: "100vh",
  //     }}
  //   >
  //     <video
  //       autoPlay
  //       loop
  //       muted
  //       playsInline
  //       style={{
  //         position: "fixed",
  //         top: 0,
  //         left: 0,
  //         width: "100%",
  //         height: "100%",
  //         objectFit: "cover",
  //         zIndex: -1,
  //       }}
  //     >
  //       <source
  //         src="Pixel Winter Landscape, Snowy Mountains, Retro Pixel Art, Peaceful Winter Forest.mp4"
  //         type="video/mp4"
  //       />
  //     </video>

  //     <div
  //       style={{
  //         color: "white",
  //       }}
  //     >
  //       <Nav />
  //       <div className="py-10">
  //         <div className="body gap-20 ">
  //           <div>
  //             <p className="body-text text-7xl">FUTURE-READY,</p>
  //             <p className="body-text text-7xl">SMART LEARNING</p>
  //           </div>
  //           <div className="flex gap-50">
  //             <div className="buttons flex items-center gap-10">
  //               <p className="text-center -tracking-tighter">Get Started</p>
  //               <FaArrowCircleRight size={40} />
  //             </div>
  //             <div className="buttons flex items-center gap-5 tracking-wider">
  //               <p className="text-center">Explore More</p>
  //               <FaArrowCircleRight size={40} />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <Body />
  //       <div class="wrapper pb-100">
  //         <div class="box ">
  //           <div>
  //             <p
  //               className="text-black text-center text-6xl pt-10"
  //               style={{ lineHeight: "1.5", letterSpacing: "10px" }}
  //             >
  //               NEXUS IS BULIT ON{" "}
  //             </p>
  //           </div>
  //           <div className="px-100 py-20">
  //             <img src="Qualified.png" alt="" />
  //           </div>
  //           <div>
  //             <p className="text-black text-center text-2xl tracking-wider">
  //               The world's most advanced coding assessment platform for <br />
  //               organizations looking to scale their hiring, upskilling, and{" "}
  //               <br /> certification programs.
  //             </p>
  //           </div>
  //           <div className="p-20"></div>
  //         </div>
  //       </div>
  //     </div>
  //             <Route path="/level/:id" element={<Level />} />
  //   </div>
    
  // );
  
// }
// export default App;
// ("");
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Level from "./pages/Level";
import Profile from "./pages/Profile";
import SignIn from"./pages/SignIn";
import Leaderboard from"./pages/Leaderboard";
import LevelMap from "./pages/LevelMap";
import SignOut from"./pages/SignOut";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/level/" element={<Level />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/signin/" element={<SignIn />} />
        <Route path="/signout/" element={<SignOut />} />
        <Route path="/levelmap/" element={<LevelMap/>} />
        <Route path="/leaderboard/" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
