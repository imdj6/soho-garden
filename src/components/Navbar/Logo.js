'use client'
import Image from "next/image"
import {useRouter} from "next/navigation"

export default function Logo (){
    const router=useRouter();
    return (
        <>
        <Image
        alt="logo"
        className="hidden md:block cursor-pointer"
        height="100"
        width="100"
        src="/assets/logo.ico"
        />
        <span className='text-white text-2xl'>Soho Garden CAfe</span>
        </>
    )
}