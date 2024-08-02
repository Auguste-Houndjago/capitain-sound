"use client";

import { useRouter } from "next/navigation";
import { twMerge } from 'tailwind-merge';

import {HiHome } from "react-icons/hi"
import {BiSearch} from "react-icons/bi"

import { RxCaretLeft, RxCaretRight  } from "react-icons/rx";
import Button from "./Button";

interface HeaderProps{
    children: React.ReactNode ;
    className?: string;
}


const Header: React.FC<HeaderProps> = ({children ,className}) => {
    const router = useRouter();

    const handeLogout =() =>{
        //
    }
    return ( <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-4`, className)}>
            <div className="w-full mb-4 flex items-center justify-between">

                <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition" onClick={()=>{
                    router.back()
                }}>
                <span className="text-white">
                    <RxCaretLeft size={35} />
                </span>
                </button>
                
                <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
                onClick={()=>{
                    router.forward()
                }}
                >
                <span className="text-white">
                    <RxCaretRight size={35} />
                </span>
                </button>

                <div className="hidden md:flex gap-x-2 items-center">

                </div>
                <div className="flex md:hidden gap-x-2 items-center ">
                        <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                                <span className="text-black">
                                    <HiHome size={21}/>
                                </span>
                        </button>

                        <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                                <span className="text-black">
                                    <BiSearch size={21}/>
                                </span>
                        </button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                        <>
                        <div>
                            <Button onClick={()=>{}} 
                             className="bg-transparent text-neutral-300 font-medium">
                                sign up
                            </Button>
                        </div>
                        <div>
                            <Button onClick={()=>{}}
                            className="bg-white px-6 py-2 text-neutral-300 font-bold"
                            >
                                log in
                            </Button>
                        </div>
                        </>
                </div>
            </div>
        {children}
    </div> );
}
 
export default Header;