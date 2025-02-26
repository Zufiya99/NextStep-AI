"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 text-center pt-40">
      <h1 className="text-7xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mt-4">
        Oops! Page not found
      </h2>
      <p className="text-gray-500 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <button
        onClick={() => router.push("/")}
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </button>

      <Image
        src="/Err.jpg"
        alt="Not Found"
        width={300}
        height={300}
        className="mt-8 opacity-90"
      />
    </div>
  );
};

export default NotFoundPage;
