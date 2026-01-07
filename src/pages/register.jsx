import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Link } from "react-router-dom";
import DynamicTitle from "../components/DynamicTitle";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Register = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      await user.reload();

      console.log(user.photoURL);

      navigate("/");
    } catch (error) {
      console.log(error.code, error.message);
    }
  };

  const handleGoogleRegister = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <>
      <DynamicTitle />
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl bg-white/90 backdrop-blur p-8 shadow-2xl">
          <h2 className="text-center text-3xl font-bold text-gray-800">
            Create Account
          </h2>
          <p className="mt-1 mb-6 text-center text-sm text-gray-500">
            Sign up to get started
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Photo URL
              </label>
              <input
                name="photoURL"
                type="url"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="https://example.com/photo.jpg"
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 py-2.5 font-medium text-white transition hover:bg-indigo-700 active:scale-[0.98]"
            >
              Register
            </button>
          </form>

          <div className="mt-5">
            <button
              type="button"
              onClick={handleGoogleRegister}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Continue with Google
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
