import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";
import DynamicTitle from "../components/DynamicTitle";

const Profile = () => {
  const { user, loading, handleLogout } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <DynamicTitle />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
          {/* Profile Photo */}
          <div className="flex justify-center">
            <img
              src={user.photoURL || "https://i.ibb.co/2kR5zq0/default-user.png"}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500"
            />
          </div>

          {/* Name */}
          <h1 className="mt-4 text-center text-2xl font-bold text-gray-800">
            {user.displayName || "No Name"}
          </h1>

          {/* Email */}
          <p className="mt-1 text-center text-gray-600">{user.email}</p>

          {/* Info List */}
          <div className="mt-6 space-y-3 text-sm text-gray-700">
            <div className="flex justify-between">
              <span className="font-medium">User ID</span>
              <span className="truncate max-w-[200px]">{user.uid}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Provider</span>
              <span>{user.providerData[0]?.providerId}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Email Verified</span>
              <span
                className={
                  user.emailVerified ? "text-green-600" : "text-red-500"
                }
              >
                {user.emailVerified ? "Yes" : "No"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Account Created</span>
              <span>
                {new Date(user.metadata.creationTime).toLocaleDateString()}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Last Login</span>
              <span>
                {new Date(user.metadata.lastSignInTime).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
