import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";
import { auth } from "../../Firebase/firebase.init";

const Login = () => {
  const { signInWithGoogle, setLoading, user, signInUser } = use(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
        setLoading(false);
      });
  };

  const googleLogin = () => {
    signInWithGoogle(auth)
      .then((result) => {
        const user = result.user;
          const userInfo = {
            name: user.displayName,
            email: user.email || user?.providerData[0]?.email || `${user.uid}@anonymous.com`,
            photoURL: user.photoURL,
            role: "user", // Default role
            creationTime: user.metadata.creationTime || new Date().toISOString(),
          };
        fetch(`${import.meta.env.VITE_API_URL}/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then(() => {
            console.log("User data saved");
            navigate(location?.state ? location.state : "/");
            toast.success("Login Successfully");
          });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card bg-base-100 shadow-xl w-full max-w-md border border-base-200">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6 text-base-content">Login Account</h2>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password Field */}
            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <label className="label">
                <Link
                  to="/forgot-password"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>

            {/* Login Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Login</button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Login */}
          <button
            onClick={googleLogin}
            className="btn btn-outline w-full flex items-center gap-2"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>

          {/* Register Link */}
          <p className="text-center mt-4 text-sm">
            Don’t have an account?{" "}
            <Link to="/register" className="link link-primary font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
