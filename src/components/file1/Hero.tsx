export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/video/hero7.mp4"
          type="video/mp4"
        />
        <source
          media="(max-width: 1023px)"
          srcSet="/video/hero-mobile.mp4"
          type="video/mp4"
        />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/video/hero7.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </picture>
      <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4 px-6 md:px-32">
        <h1
          className="text-white text-3xl md:text-4xl text-center decoration-double"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Estetik International <br />
          Blending Art and Plastic Surgery
        </h1>
      </div>
    </div>
  );
}
