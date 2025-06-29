function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-6
                 bg-gradient-to-br from-black via-zinc-900 to-black bg-[length:400%_400%] animate-gradient-x overflow-hidden"
    >
      {/* 🔶 Orange Glow Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-orange-500 opacity-20 blur-3xl rounded-full animate-ping-slow"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-orange-400 opacity-15 blur-2xl rounded-full animate-ping-slow"></div>

      {/* Content */}
      <div className="z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Hi, I'm <span className="text-orange-500">Sparsh</span> 👋
        </h1>
        <p className="text-lg md:text-xl max-w-xl text-gray-300 mb-6">
          A data scientist passionate about building real-world AI-powered solutions that create measurable impact.
        </p>
        <a
          href="https://drive.google.com/file/d/1GpQ_OMJtV0H-LoVCG0h0Ts9O4UpOFhuq/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-2 rounded-full transition duration-300"
        >
          Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;
