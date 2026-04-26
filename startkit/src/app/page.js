import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen 
      bg-gradient-to-b from-white to-zinc-100 
      dark:from-black dark:to-zinc-900 
      font-sans px-4">

      {/* HERO TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 text-center">
        Welcome to Your Dashboard App 🚀
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg font-medium text-center max-w-xl">
        Manage your books and food items with authentication, modern UI, and a full dashboard system.
      </p>

      {/* BUTTONS */}
      <div className="mt-8 flex gap-4 flex-wrap justify-center">

        <Link
          href="/dashboard"
          className="px-6 py-3 bg-emerald-700 text-white rounded-xl hover:bg-emerald-800 transition shadow-md"
        >
          <span className="text-lg font-semibold">Go to Dashboard</span>
        </Link>

        <Link
          href="/signup"
          className="px-6 py-3 border border-emerald-700 text-emerald-700 rounded-xl 
          hover:bg-emerald-700 hover:text-white transition"
        >
          <span className="text-lg font-semibold">Sign Up</span>
        </Link>

        <Link
          href="/login"
          className="px-6 py-3 border border-teal-700 text-teal-700 rounded-xl 
          hover:bg-teal-800 hover:text-white transition"
        >
          <span className="text-lg font-semibold">Sign In</span>
        </Link>

      </div>

      {/* FEATURE CARDS */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">

        <div className="p-5 dark:bg-zinc-900 rounded-xl shadow 
        hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

          <h2 className="font-semibold text-emerald-700 text-xl">
            Authentication
          </h2>

          <p className=" dark:text-gray-100 mt-2  font-medium text-zinc-700 ">
            Better Auth with MongoDB for secure sign up & login system.
          </p>

        </div>

        <div className="p-5 bg-white dark:bg-zinc-900 rounded-xl shadow 
        hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

          <h2 className="font-semibold text-teal-700 text-xl">
            Dashboard Layout
          </h2>

          <p className=" font-medium text-zinc-700 dark:text-gray-100 mt-2">
            Sidebar dashboard with book & food management sections.
          </p>

        </div>

        <div className="p-5 bg-white dark:bg-zinc-900 rounded-xl shadow 
        hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

          <h2 className="font-semibold text-sky-700 text-xl">
            UI Features
          </h2>

          <p className=" font-medium text-zinc-700 dark:text-gray-100 mt-2">
            Modals, dynamic cards, toast notifications, and smooth UI.
          </p>

        </div>
      </div>

      {/* FOOTER NOTE */}
      <p className="mt-10 text-gray-600 dark:text-gray-200 text-center text-lg font-semibold">
        Built with Next.js + HeroUI + Gravity Icons + React Toastify + Better Auth + MongoDB ✨
      </p>

    </div>
  );
}