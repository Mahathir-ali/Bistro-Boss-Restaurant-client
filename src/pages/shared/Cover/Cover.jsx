const Cover = ({ backgroundImg, height, title }) => {
  return (
    <section>
      <div
        className="hero"
        style={{
          backgroundImage: `url('${backgroundImg}')`,
          height: `${height}`,
        }}
      >
        <div className="hero-overlay  bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl uppercase font-bold">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
