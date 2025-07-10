const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen bg-[#dcea7f]"
         style={{
            backgroundImage: "url(/tes2.jpg)",
          }}
      >
        <div
          className="hero min-h-screen absolute"
          style={{
            backgroundImage: "url(/masterpiece2.png)",
          }}
        ></div>

        <div className="hero-overlay "></div>
        <div className="hero-content text-neutral-content text-center  font-balsamiq">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Hello there, I'm Merylien Jovanda
            </h1>
            <p className="mb-5">
             I'm a web developer and a character illustration enthusiast.
            </p>
            <button className="btn-hero">
              <a href="#about">Get Started</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
