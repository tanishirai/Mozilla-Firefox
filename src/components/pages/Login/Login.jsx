import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FcGoogle } from "react-icons/Fc";

const Login = () => {
  const notify = () => toast.success("Login Successfully!");
  const notifyGoogle = (e) => toast.success(e);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle form submission without authentication
    notify(); // Just show success message for now
  };

  const handleGoogleLogin = () => {
    // Simulating Google login
    notifyGoogle("Google Login Success");
  };

  return (
    <div className="my-20">
      <div className="w-full max-w-sm p-4 bg-transparent mx-auto bg-opacity-10 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleLogin} className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <button className="w-full btn text-white bg-blue-700 hover:bg-[#6633B5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              to="/register"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form>
        <div>
          <div
            className="w-full btn mt-4 flex gap-2 hover:bg-[#6633B5] mx-auto rounded-3xl bg-blue-600"
            onClick={handleGoogleLogin}
          >
            <span className="text-3xl items-center flex gap-2 mx-auto">
              <FcGoogle className="bg-white h-full rounded-md" />
              <h2 className="text-center font-medium text-xl text-white">
                Sign Up with Google
              </h2>
            </span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
