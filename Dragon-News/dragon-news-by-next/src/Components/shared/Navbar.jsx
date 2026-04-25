import Image from 'next/image';
import React from 'react';
import userAvater from "@/assets/user.png"
import Link from 'next/link';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between mx-auto container items-center'>
            <div></div>
            <ul className='flex gap-3 font-semibold text-lg text-slate-700'>
<li>
  <NavLink href="/">Home</NavLink>
</li>
<li>
  <NavLink href="/about">About</NavLink>
</li>
<li>
  <NavLink href="/career">Career</NavLink>
</li>
            </ul>
<div className='flex items-center gap-4'>
<Image
src={userAvater} alt={userAvater} width={50} height={50}>

</Image>
{/* <h2 className='text-white font-semibold bg-zinc-700 px-3 py-2 rounded-lg'>Login</h2> */}

<Link href={"/login"}>
<button className='btn text-white font-semibold bg-zinc-700 rounded-lg'>Login</button>
</Link>

</div>

        </div>
    );
};

export default Navbar;