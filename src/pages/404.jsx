import React from "react";
import DynamicTitle from "../components/DynamicTitle";

export default function ErrorPage() {
  return (
    <>
      <DynamicTitle />
      <div className="min-h-screen flex items-center justify-center bg-gray-950 px-6">
        <div className="max-w-md w-full text-center">
          {/* Text */}
          <h1 className="text-5xl font-bold text-white mb-3">404</h1>
          <h2 className="text-xl font-semibold text-gray-200 mb-2">
            Page not found
          </h2>
          <p className="text-gray-400 mb-8">
            The page you’re looking for doesn’t exist or was moved.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="px-6 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition cursor-pointer"
            >
              Go Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
