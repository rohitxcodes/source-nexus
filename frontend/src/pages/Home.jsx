import Nav from "../components/layout/Nav";
import Body from "../components/ui/Body";
import bgVideo from "../assets/video.mp4";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      <Nav />

      {/* HERO */}
      <section className="flex flex-col items-center justify-center min-h-[85vh] gap-14 text-center">
        <div className="space-y-6">
          <h1 className="font-[var(--font-pixel)] text-[64px] tracking-[0.35em] text-black drop-shadow-md">
            FUTURE-READY,
          </h1>
          <h1 className="font-[var(--font-pixel)] text-[64px] tracking-[0.35em] text-black drop-shadow-md">
            SMART LEARNING
          </h1>
        </div>

        <div className="flex gap-12">
          <button className="font-[var(--font-pixel)] px-10 py-4 bg-[#E5E5E5] text-black text-xl tracking-widest rounded-full shadow-md hover:scale-105 transition">
            GET STARTED →
          </button>

          <button className="font-[var(--font-pixel)] px-10 py-4 bg-[#E5E5E5] text-black text-xl tracking-widest rounded-full shadow-md hover:scale-105 transition">
            EXPLORE MORE →
          </button>
        </div>
      </section>

      <Body />
    </div>
  );
};

export default Home;
