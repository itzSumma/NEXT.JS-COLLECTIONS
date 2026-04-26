"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isPending) return <div className="p-4">Loading...</div>;

  const handleSignOut = () => {
    authClient.signOut();
  };

  // 🔥 Reusable link style
  const linkStyle = `
    no-underline text-base md:text-lg px-4 py-2 rounded-md font-medium
    border border-transparent
    bg-emerald-600 text-white
    hover:bg-emerald-700
    dark:bg-zinc-800 dark:text-emerald-300
    dark:border-zinc-700
    dark:hover:bg-zinc-700
    transition-colors duration-200
  `;

  const links = (
    <>
      <li>
        <Link href="/" className={linkStyle}>Home</Link>
      </li>

      <li>
        <Link href="/dashboard" className={linkStyle}>Dashboard</Link>
      </li>

      <li>
        <Link href="/signup" className={linkStyle}>Sign Up</Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg">
      
      <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">

        {/* LEFT */}
        <div className="flex items-center gap-4">
          
          {/* Mobile menu */}
          <button
            className="md:hidden text-zinc-700 dark:text-zinc-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          <div className="flex items-center gap-3">
            <p className="font-bold text-2xl text-zinc-900 dark:text-white">
              Start<span className="text-emerald-600 dark:text-emerald-400">Kit</span>
            </p>

            <ThemeToggle />
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-3">
          {links}
        </ul>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                {user.name}
              </span>
              <Button onClick={handleSignOut}>Sign Out</Button>
            </>
          ) : (
            <Link href="/login" className={linkStyle}>
              Login
            </Link>
          )}
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <ul className="flex flex-col gap-2 p-4">
            {links}

            <li className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              {user ? (
                <>
                  <div className="text-emerald-700 dark:text-emerald-400 font-semibold">
                    {user.name}
                  </div>
                  <Button onClick={handleSignOut}>Sign Out</Button>
                </>
              ) : (
                <Link href="/login" className={linkStyle}>
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;