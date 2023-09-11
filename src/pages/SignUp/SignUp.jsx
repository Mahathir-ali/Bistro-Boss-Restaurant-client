import { Link, useNavigate } from "react-router-dom";
import signUPImg from "../../assets/others/authentication2.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // create user
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile updated");
          // reset the sign up from using react-hook-form reset function
          reset();
          // Showing toast that user created successful
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Profile Created Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          // after sign up navigating to home page
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-10">SignUp now</h1>
            <img src={signUPImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL")}
                    placeholder="photo url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors?.email?.type === "required" && (
                    <p className="text-red-600 text-sm">
                      This field is required
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {/* password errors handling start*/}
                  {errors?.password?.type === "required" && (
                    <p className="text-sm text-red-600">
                      This field is required
                    </p>
                  )}
                  {errors?.password?.type === "minLength" && (
                    <p className="text-sm text-red-600">
                      Your password must be 6 character
                    </p>
                  )}
                  {errors?.password?.type === "maxLength" && (
                    <p className="text-sm text-red-600">
                      Your password must be less than 20 character
                    </p>
                  )}

                  {errors?.password?.type === "pattern" && (
                    <p className="text-sm text-red-600">
                      Password must contain one Capital letter one small letter
                      one number and one special character
                    </p>
                  )}
                  {/* password errors handling end*/}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    // disabled={disabled}
                    className="btn btn-primary"
                    type="submit"
                    value="Register"
                  />
                </div>
              </form>
              <p className="text-center p-4 text-blue-700">
                <small>
                  Already have an account? <Link to="/login">Log in</Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
