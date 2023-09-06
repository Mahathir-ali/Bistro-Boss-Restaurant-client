import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FeaturedImg from "../../../assets/home/featured.jpg";
import "./featured.css";
const Featured = () => {
  return (
    <section className="featured-item bg-fixed mb-32 lg:p-24 md:p-10">
      <SectionTitle subHeading={"check it out"} heading={"featured items"} />
      <div className="md:flex justify-center items-center bg-slate-600 bg-opacity-10 py-8 px-16  text-white px-20 ">
        <div>
          <img src={FeaturedImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 22, 2023</p>
          <p>Where can i get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            necessitatibus sapiente laborum in doloribus eos provident odit
            debitis nostrum, accusantium cupiditate labore. Eum aut obcaecati
            iure, adipisci quae odit illum.
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
