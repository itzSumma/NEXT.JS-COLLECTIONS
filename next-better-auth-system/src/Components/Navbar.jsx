"use client";
import { signOut, useSession } from "@/Lib/auth-client";
import { Link } from "@heroui/react";


const Navbar = () => {
  const { data, isPending } = useSession();

  if (isPending) {
    return <div className="container mx-auto text-center p-10">Loading...</div>;
  }

  const user = data?.user;

  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <p className="font-bold">Form</p>
          </div>

          {/* Nav Links */}
          <ul className="flex items-center gap-4">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/auth/signup">Sign Up</Link></li>
          </ul>

          {/* Auth Section */}
          <div>
            {user ? 
              <>
                <p>Welcome, {user.name}!</p>
                <button onClick={()=>signOut()}>SignOut</button>
              </>
             : 
              <>
                <Link href="/auth/signin">SignIn</Link>
              </>
            }
          </div>

        </header>
      </nav>
    </div>
  );
};

export default Navbar;