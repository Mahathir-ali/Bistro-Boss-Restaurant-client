const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className=" absolute right-0 mr-4 mt-4 rounded bg-slate-800 text-white">
          ${price}
        </p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-outline bg-slate-400 border-0 border-b-4 border-orange-200 text-black">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
