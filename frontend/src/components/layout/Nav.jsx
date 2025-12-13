import logo from "../../assets/logo.png";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-6 text-white font-[var(--font-pixel)] tracking-widest">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Nexus" className="h-10" />
        <span className="text-xl">NEXUS</span>
      </div>

      <div className="flex gap-12 text-lg">
        <span className="cursor-pointer hover:opacity-70">TRAIN</span>
        <span className="cursor-pointer hover:opacity-70">PRACTICE</span>
        <span className="cursor-pointer hover:opacity-70">ABOUT</span>
        <span className="cursor-pointer hover:opacity-70">SHOP</span>
      </div>
    </nav>
  );
};

export default Nav;
