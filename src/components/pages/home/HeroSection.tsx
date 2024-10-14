export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center bg-light-blue py-44 text-center"
    >
      <div className="mb-14 flex flex-col items-center justify-center text-center">
        <h2 className="mb-4 font-bebas text-7xl uppercase md:text-8xl xl:text-9xl">
          Portfólio
        </h2>
        <h2 className="z-10 font-brittany text-6xl text-cream md:text-7xl xl:text-8xl">
          jornalístico
        </h2>
      </div>
      <p className="border-2 border-black bg-cream px-8 py-1 font-semibold uppercase tracking-wider md:text-lg xl:text-xl">
        Gabriela Daniel
      </p>
    </section>
  );
}
