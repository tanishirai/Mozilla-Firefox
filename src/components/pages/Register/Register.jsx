import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    profilePic: "",
    email: "",
    password: "",
    terms: false,
  });

  const location = useLocation();
  const navigate = useNavigate();

  const notify = () => toast.success("Registration Successfully!");
  const notifyPassword = () => toast.error("Password Length must be six digits!");
  const notifyPasswordChar = () =>
    toast.error("Your password should have at least one uppercase character!");
  const notifyPasswordSpecial = () =>
    toast.error("Your password should have at least one special character!");
  const notifyTerms = () => toast.error("Please accept our terms and conditions!");

  const handleRegister = (e) => {
    e.preventDefault();

    const { name, profilePic, email, password, terms } = userData;

    if (password.length < 6) {
      notifyPassword();
      return;
    } else if (!/[A-Z]/.test(password)) {
      notifyPasswordChar();
      return;
    } else if (
      !/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}/.test(
        password
      )
    ) {
      notifyPasswordSpecial();
      return;
    } else if (!terms) {
      notifyTerms();
      return;
    }

    // Here you can handle registration logic (e.g., saving the data to your database)
    // Example of what you can do:
    console.log("User registered:", { name, profilePic, email, password });
    notify();
    navigate(location?.state ? location.state : "/");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
      <div className="my-12">
        <div className="w-full max-w-sm p-4 bg-transparent mx-auto bg-opacity-10 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleRegister} className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Register to our platform
            </h5>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your name
              </label>
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Your name"
                value={userData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your Profile Picture URL
              </label>
              <input
                type="text"
                name="profilePic"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Profile picture URL"
                value={userData.profilePic}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                value={userData.email}
                onChange={handleChange}
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="••••••••"
                value={userData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    checked={userData.terms}
                    onChange={handleChange}
                    required
                  />
                </div>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Accept Terms & Conditions
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full btn text-white bg-blue-700 hover:bg-[#6633B5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already registered?{" "}
              <Link
                to="/login"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Login Here
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
