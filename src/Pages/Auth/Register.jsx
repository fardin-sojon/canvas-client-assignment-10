import React, { use } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthContext";
import { auth } from "../../Firebase/firebase.init";
import { toast } from "react-toastify";


const Register = () => {

    const {signInWithGoogle, setLoading, user} = use(AuthContext)
    console.log(user);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;

    console.log({ name, email, photoURL, password });
    // createUser(auth, email, password)
    // .then(result=>{
    //     console.log(result.user);
    //     toast.success("Register Succesfully")
    // })
    // .catch(error=>{
    //     console.log(error.message);
    // })
  };

  const googleLogin = ()=>{
    signInWithGoogle(auth)
    .then(result=>{
        console.log(result.user);
        toast.success("Login Successfully")
    })
    .catch(error=>{
        console.log(error.message);
        toast.success(error.message)
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="backdrop-blur-lg gradient-color shadow-2xl rounded-2xl p-8 w-full max-w-md text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="input input-bordered w-full bg-white/20 placeholder-gray-200 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-white/20 placeholder-gray-200 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full bg-white/20 placeholder-gray-200 text-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full bg-white/20 placeholder-gray-200 text-white"
              required
            />
            <p className="text-xs text-gray-200 mt-1">
              Must contain uppercase, lowercase & minimum 6 characters.
            </p>
          </div>

          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-[#7A3FFF] to-[#C63BFA] border-none text-white hover:scale-105 transition-transform"
          >
            Register
          </button>
        </form>

        <div className="divider text-white/60">or</div>

        <button onClick={googleLogin} className="btn w-full bg-white text-gray-700 hover:bg-gray-200">
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className="text-center mt-4 text-sm text-gray-200">
          Already have an account?{" "}
          <Link to="/login" className="underline text-white font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
