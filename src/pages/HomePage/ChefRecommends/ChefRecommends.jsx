import cardImg from "../../../assets/home/slide1.jpg";

const ChefRecommends = () => {
  return (
    <div className="flex justify-evenly  flex-wrap mb-32 ">
      <div className="card  w-[300px]  h-[500px]  shadow-xl">
        <figure>
          <img className="w-[100%]" src={cardImg} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card  w-[300px]  h-[500px]  shadow-xl">
        <figure>
          <img className="w-[100%]" src={cardImg} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card w-[300px]  h-[500px] shadow-xl">
        <figure>
          <img className="w-[100%]" src={cardImg} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommends;
