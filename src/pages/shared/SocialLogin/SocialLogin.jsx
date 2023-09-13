import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <div className="divider ">OR</div>
      <div className="flex justify-evenly items-center pb-5">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          <FcGoogle className="text-2xl" />
        </button>
        <button className="btn btn-circle btn-outline">
          <FaFacebook className="text-2xl" />
        </button>
        <button className="btn btn-circle btn-outline">
          <RiInstagramFill className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
