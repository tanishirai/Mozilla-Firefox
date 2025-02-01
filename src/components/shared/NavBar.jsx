import { Link, NavLink } from "react-router-dom";
import Loading from "../Loading/Loading";

const NavBar = () => {
  const loading = false;  // Set loading state if needed
  const user = null;  // Set user state if needed

  if (loading) {
    return <Loading />;
  }

  const handleLogOut = () => {
    // Handle logout logic if needed
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="text-[#7209B7] hover:text-[#B5179E]">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/events" className="text-[#7209B7] hover:text-[#B5179E]">
          Events
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-us" className="text-[#7209B7] hover:text-[#B5179E]">
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="bg-opacity-10 bg-slate-200 relative z-20 font-semibold text-[[#6633B5]]">
        <div className="navbar max-w-screen-xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-br from-[#4361EE] to-[#4CC9F0] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-[#7209B7] dark:focus:ring-[#7209B7] rounded-box w-56"
              >
                {navLinks}
              </ul>
            </div>
            <Link className="flex items-center" to="/">
              {/* Replaced the logo and text */}
              <div className="flex justify-center gap-1 py-2 px-6 rounded-[inherit] items-center">
                <h1 className="text-[#7209B7]">Mozilla</h1>
                <img
                  src="src/assets/favicon.png"
                  width="500"
                  height="500"
                  className="w-8 h-8 hover:rotate-45 -rotate-12 duration-200 cursor-pointer"
                  alt="Logo"
                />
                <h1 className="text-[#7209B7]">Firefox</h1>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex gap-5">
            <ul className="menu menu-horizontal text-xl px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={-1} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL || "/default-avatar.png"} alt="user-avatar" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#4CC9F0] rounded-box w-60"
                >
                  <li>
                    <a className="justify-between mb-5 items-center">
                      <p className="text-2xl font-bold text-[#7209B7]">
                        {user?.displayName || "Guest"}
                      </p>
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a className="justify-between mb-5 items-center">
                      <Link to={`/paymentsReport`}>
                        <button className="btn btn-xs mb-2 text-[#7209B7]">
                          Payment Reports
                        </button>
                      </Link>
                    </a>
                  </li>
                  <Link
                    onClick={handleLogOut}
                    className="text-white bg-gradient-to-br from-[#7209B7] to-[#4361EE] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-[#F72585] dark:focus:ring-[#7209B7] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Log Out
                  </Link>
                </ul>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-white bg-gradient-to-br from-[#7209B7] to-[#4361EE] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-[#F72585] dark:focus:ring-[#7209B7] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
