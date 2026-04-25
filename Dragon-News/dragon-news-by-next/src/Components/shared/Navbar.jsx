import Image from 'next/image';
import React from 'react';
import userAvater from "@/assets/user.png"
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='flex justify-between mx-auto container items-center'>
            <div></div>
            <ul className='flex gap-3 font-semibold text-lg text-slate-700'>
<li href ="/">Home</li>
<li href ="/about">About</li>
<li href ="/career">Career</li>
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