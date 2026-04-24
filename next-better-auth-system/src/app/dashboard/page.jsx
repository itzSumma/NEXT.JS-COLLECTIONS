// 'use client'

import { auth } from "@/Lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";


export const metadata= {
  title: 'Dashboard',
  description: 'This is Dashboard Page.',
}
const Dashboard =async () => {
const session=await auth.api.getSession({
    headers: await headers()
});
console.log("session data here",session);

const user = session?.user;
if(!user){

    redirect("/auth/signin");

    return <div>Please Sign In to access the dashboard
        
    </div>
}

    return (
        <div>
            <h2>This is Dashboard Page</h2>

        </div>
    );
};

export default Dashboard;