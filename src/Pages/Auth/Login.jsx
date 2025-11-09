import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";
import { auth } from "../../Firebase/firebase.init";

const Login = () => {


    const {signInWithGoogle, setLoading, user} = use(AuthContext)
        console.log(user);
         const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    // handle login logic here
  };

    const googleLogin = ()=>{
      signInWithGoogle(auth)
      .then(result=>{
          console.log(result.user);
           navigate(location?.state ? location.state : "/");
          toast.success("Login Successfully")
      })
      .catch(error=>{
          console.log(error.message);
          toast.success(error.message)
      })
    }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="gradient-color backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-md text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Login Account</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-white/20 placeholder-gray-200 text-white"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full bg-white/20 placeholder-gray-200 text-white"
              required
            />

            {/* Forgot Password */}
            <div className="text-right mt-2">
              <Link
                to="/forgot-password"
                className="text-sm text-left text-white/80 hover:text-white underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-[#7A3FFF] to-[#C63BFA] border-none text-white hover:scale-105 transition-transform"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider text-white/60">or</div>

        {/* Google Login */}
        <button onClick={googleLogin} className="btn w-full bg-white text-gray-700 hover:bg-gray-200">
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Register Link */}
        <p className="text-center mt-4 text-sm text-gray-200">
          Don’t have an account?{" "}
          <Link to="/register" className="underline text-white font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
