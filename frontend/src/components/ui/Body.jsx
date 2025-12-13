import gamingImg from "../../assets/gaming.png";
import interactiveImg from "../../assets/interactive.jpg";
import youImg from "../../assets/you.jpg";
import leaderboardImg from "../../assets/leaderboard.png";

const Body = () => {
  return (
    <section className="relative py-28">
      <div className="max-w-7xl mx-auto bg-teal-400 rounded-[3rem] shadow-2xl px-20 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <Feature title="STREAMLINE YOUR CODING" img={gamingImg} />
          <Feature title="INTERACTIVE EDUCATION" img={interactiveImg} reverse />
          <Feature title="REWARDING LEVELS" img={youImg} />
          <Feature
            title="MULTIPLAYER • COMPETE • WIN"
            img={leaderboardImg}
            reverse
          />
        </div>
      </div>
    </section>
  );
};

const Feature = ({ title, img, reverse }) => (
  <div
    className={`flex items-center gap-12 ${reverse ? "flex-row-reverse" : ""}`}
  >
    <h2 className="font-[var(--font-pixel)] text-4xl tracking-widest leading-tight max-w-sm">
      {title}
    </h2>

    <img src={img} alt={title} className="w-[420px] rounded-2xl shadow-xl" />
  </div>
);

export default Body;
