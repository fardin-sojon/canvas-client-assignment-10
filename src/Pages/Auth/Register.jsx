import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import React, { use } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthContext";
import { auth } from "../../Firebase/firebase.init";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { signInWithGoogle, user, createUser, setLoading, setUser } = use(AuthContext);
  console.log(user);

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    // ... existing logic ...
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;
    // ... rest of handleRegister logic ...
    
    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters and include uppercase and lowercase letters."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const currentUser = result.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            // Update Auth Context State Manually
            setUser({ ...currentUser, displayName: name, photoURL: photoURL, email: email });
            
            const userInfo = {
              name: name,
              email: email,
              photoURL: photoURL,
              role: "user",
              creationTime: new Date().toISOString(),
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
                toast.success("Registered Successfully");
                navigate(location?.state || "/");
              });
          })
          .catch((err) => {
            console.log(err);
            toast.error("Profile update failed");
            setLoading(false);
          });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
        setLoading(false);
      });
  };

  const googleLogin = () => {
    // ... existing googleLogin logic ...
     signInWithGoogle(auth)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: user.displayName,
          email: user.email || user?.providerData[0]?.email || `${user.uid}@anonymous.com`,
          photoURL: user.photoURL,
          role: "user",
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
             navigate(location?.state || "/");
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
          <h2 className="text-3xl font-bold text-center mb-6 text-base-content">
            Create an Account
          </h2>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="form-control">
              <label className="label"><span className="label-text">Full Name</span></label>
              <input type="text" name="name" placeholder="Enter your full name" className="input input-bordered w-full" required />
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full" required />
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text">Photo URL</span></label>
              <input type="text" name="photo" placeholder="Enter your photo URL" className="input input-bordered w-full" />
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text">Password</span></label>
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
                <span className="label-text-alt text-warning">Must contain uppercase, lowercase & min 6 chars.</span>
              </label>
            </div>

            <div className="form-control mt-6">
               <button className="btn btn-primary text-white">Register</button>
            </div>
          </form>

          <div className="divider">OR</div>

          <button onClick={googleLogin} className="btn btn-outline w-full flex items-center gap-2">
            <FcGoogle size={20} />
            Continue with Google
          </button>

          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="link link-primary font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
