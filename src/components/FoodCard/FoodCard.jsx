import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const orderItem = { foodId: _id, name, image, price, email: user.email };
      console.log(user);
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch(); // refetch cart to update the number of items added to the cart
            Swal.fire({
              position: "center",
              icon: "success",
              title: "ADDED TO THE CART",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // navigating the user where he was
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline bg-slate-400 border-0 border-b-4 border-orange-200 text-black"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
