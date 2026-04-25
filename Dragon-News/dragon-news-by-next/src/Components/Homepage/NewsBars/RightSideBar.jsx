import Image from 'next/image';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import FbLogo from "@/assets/fb.png";
import twitter from "@/assets/twitter.png";
import instagram from "@/assets/instagram.png";
import swimming from "@/assets/swimming.png";
import classroom from "@/assets/class.png";
import playground from "@/assets/playground.png";

const RightSideBar = () => {
    return (
        <div>
            <h2 className='font-semibold text-xl m-2'>Login with</h2>

            <div className='flex flex-col gap-3'>
                <button className='btn border-indigo-400 text-indigo-500'>
                    <FaGoogle /> Login with Google
                </button>

                <button className='btn'>
                    <FaGithub /> Login with Github
                </button>

                {/* Middle div */}
                <div className='space-y-2 text-lg font-medium '>
                    <h2 className='font-semibold text-xl m-2'>Find Us On</h2>

                    <div className='flex justify-center gap-2 border border-zinc-400 p-2 rounded-md items-center hover:bg-slate-300'>
  <Image src={FbLogo} alt="facebook" width={20} height={10}/>
  <button>Facebook</button>
</div>

<div className='flex justify-center gap-2 border border-zinc-400 p-2 rounded-md items-center hover:bg-slate-300'>
  <Image src={twitter} alt="twitter" width={20} height={20}/>
  <button>Twitter</button>
</div>

<div className='flex justify-center gap-2 border border-zinc-400 p-2 rounded-md items-center hover:bg-slate-300'>
  <Image src={instagram} alt="instagram" width={20} height={20}/>
  <button>Instagram</button>
</div>

                    {/* last div */}
                    <div className='bg-gray-300 mt-4 p-2 rounded-md space-y-2 items-center'>
                        <Image src={swimming} alt='swimming' width={300} height={300} className="mx-auto block"/>
                        <Image src={classroom} alt='classroom' width={300} height={300}  className="mx-auto block"/>
                        <Image src={playground} alt='playground' width={300} height={300}  className="mx-auto block"/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RightSideBar;