"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NotFoundPage = () => {
  const path = usePathname();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-6">
      <h1 className="text-8xl font-bold">404</h1>

      <p className="mt-3 text-gray-600 text-2xl font-semibold">
        Oops! The page you’re trying to access doesn’t exist.
        <br />
        It may have been moved, deleted, or the URL is incorrect.
      </p>

      <p className="mt-2 text-gray-500 text-xl font-medium">
        Path: {path}
      </p>

      <Link
        href="/"
        className="mt-6 rounded-xl bg-rose-600 px-5 py-3 text-xl font-medium text-white hover:bg-rose-500"
      >
        Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;