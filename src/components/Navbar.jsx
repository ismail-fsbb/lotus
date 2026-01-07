import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const logout = async () => {
    await handleLogout();
    navigate("/login");
  };

  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold">
        GameZone
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-yellow-400">
          Home
        </Link>
        <Link to="/games" className="hover:text-yellow-400">
          Games
        </Link>

        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link
              to="/register"
              className="bg-yellow-400 text-black px-4 py-1 rounded"
            >
              Register
            </Link>
          </>
        ) : (
          <div className="relative flex items-center gap-2">
            <img
              onClick={() => setOpen(!open)}
              src={user.photoURL || "https://i.ibb.co/2kR5zq0/default-user.png"}
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover border-2 border-yellow-400 cursor-pointer"
            />

            {open && (
              <div className="absolute right-0 mt-3 w-44 rounded-xl bg-white text-gray-800 shadow-lg">
                <Link
                  to="/profile"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  My Profile
                </Link>

                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
            <button
              onClick={logout}
              className="w-full text-left px-4 py-2 text-sm bg-red-600 hover:bg-red-800 rounded cursor-pointer"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
