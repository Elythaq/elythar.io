import GlowCard from "./GlowCard";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 space-y-10">
      <h1 className="text-5xl md:text-6xl font-bold text-[#6C63FF]">
        Hi, I’m Fadi
      </h1>

      <p className="text-xl md:text-2xl max-w-xl text-[#E5E7EB]">
        Software Developer & Tester building simulations, plugins, and tools.
      </p>

      <a
        href="#contact"
        className="relative px-6 py-3 font-medium text-[#0D1117] bg-[#6C63FF] rounded-xl group overflow-hidden w-fit"
      >
        <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out transform translate-x-full bg-gradient-to-r from-orange-500 to-yellow-400 group-hover:translate-x-0"></span>
        <span className="relative z-10 group-hover:text-white transition-colors">
          Contact Me
        </span>
      </a>

      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#F56A35] animate-pulse">
        I bring code to life
      </h2>

      <GlowCard />
    </section>
  );
}

export default Hero;
