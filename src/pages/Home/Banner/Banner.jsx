import "react-responsive-carousel/lib/styles/carousel.min.css";


const HeroSection = () => {
    return (
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/d24k2FQ/pngtree-online-survey-concept-banner-image-1384918.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
            <button className="btn bg-blue-500">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default HeroSection;