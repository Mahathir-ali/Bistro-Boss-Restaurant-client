import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import loginImg from "../../assets/others/authentication2.png";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [captchaValidated, setCaptchaValidated] = useState(false);

  const { signIn } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });

    // Check if captcha has been validated before allowing login
    if (captchaValidated) {
      // Perform login logic here
      // If login is successful, navigate to the next page or update the UI accordingly
    } else {
      // Display an error message or alert to indicate that the captcha needs to be validated first
      alert("Please validate the captcha before logging in.");
    }
  };

  const handleValidateCaptcha = () => {
    const userCaptchaValue = captchaRef.current.value;
    const MySwal = withReactContent(Swal);

    if (validateCaptcha(userCaptchaValue)) {
      setDisabled(false);
      setCaptchaValidated(true); // Captcha is validated, allow login
    } else {
      setDisabled(true);
      MySwal.fire({
        title: (
          <p>
            Sorry <br /> Try Again <br />
            <span className="text-xs">
              Please match the uppercase and lowercase{" "}
            </span>
          </p>
        ),
      });

      setCaptchaValidated(false); // Captcha validation failed, prevent login
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <h1 className="text-5xl text-bold -mt-[600px] ">Log in</h1>

        <div>
          <div className="hero-content flex lg:flex ">
            <div className="text-center lg:text-left">
              <img src={loginImg} alt="login Image" />
            </div>
            <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
              {!captchaValidated ? ( // Check if captcha is not validated
                <div className="w-[50%] h-[300px] mx-auto flex flex-col justify-center items-center ">
                  <LoadCanvasTemplate />
                  <input
                    type="text"
                    name="captcha"
                    ref={captchaRef}
                    placeholder="Type the text above"
                    className="input input-bordered mt-3 "
                  />
                  <button
                    onClick={handleValidateCaptcha}
                    className="btn btn-outline btn-xs mt-5 w-[150px] h-[40px]"
                  >
                    Validate
                  </button>
                </div>
              ) : (
                // Display the login form when captcha is validated
                <div>
                  <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                      />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                          Forgot password?
                        </a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <input
                        disabled={disabled}
                        className="btn btn-primary"
                        type="submit"
                        value="Login"
                      />
                    </div>
                  </form>
                  <p className="text-center p-4">
                    <small>
                      New Here? <Link to="/signup">Create an account</Link>
                    </small>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
