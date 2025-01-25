const Hero = () => {
  return (
    <section className="bg-background text-foreground min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-mono text-primary text-5xl md:text-7xl font-bold text-center">
        Hi, I'm Qinglan Xia!
      </h1>
      <p className="font-mono text-secondary text-2xl md:text-4xl mt-4 text-center">
        Methematician | Mobile Developer | Fullstack Developer
      </p>
      <p className="font-mono text-text mt-6 text-center max-w-3xl">
      Fire can be extinguished but not stripped of its heat; a person can be harmed but not robbed of their determination.
      </p>
      <div className="mt-8 flex space-x-4">
        <button className="font-mono bg-primary text-background px-6 py-3 rounded-full text-lg hover:bg-secondary">
          View My Projects
        </button>
        <button className="font-mono border border-primary text-primary px-6 py-3 rounded-full text-lg hover:bg-secondary hover:text-background">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
