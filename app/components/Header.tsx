"use client";

import { useRouter } from "next/navigation";
import { twMerge } from 'tailwind-merge';

import {HiHome } from "react-icons/hi"
import {BiSearch} from "react-icons/bi"

import { RxCaretLeft, RxCaretRight  } from "react-icons/rx";
import Button from "./Button";

import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Subscription } from '../../types';
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import {toast} from "react-hot-toast"

interface HeaderProps{
    children: React.ReactNode ;
    className?: string;
}


const Header: React.FC<HeaderProps> = ({children ,className}) => {
    const router = useRouter();
    const authModal=useAuthModal();

    const supabaseClient =useSupabaseClient();

    const {user} = useUser();
    const handeLogout = async() =>{
        const { error } = await supabaseClient.auth.signOut();
        //TODO: Reset any playing songs 

        router.refresh();

        if (error){
            toast.error(error.message);
        }
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
                    {user ? (
                       <div className="flex gap-x-4 items-center">
                        <Button
                        onClick={handeLogout}
                        className="bg-white px-6 py-2"
                        >
                            LogOut
                        </Button>
                        <Button onClick={()=> router.push('/account')
                        } 
                        className="bg-white">

                            <FaUserAlt />
                      
                        </Button>
                        </div>
                    ):(
                        <>
                        <div>
                            <Button onClick={authModal.onOpen} 
                             className="bg-transparent text-neutral-300 font-medium">
                                sign up
                            </Button>
                        </div>
                        <div>
                            <Button onClick={authModal.onOpen}
                            className="bg-white px-6 py-2 text-neutral-300 font-bold"
                            >
                                log in
                            </Button>
                        </div>
                        </> )}
                </div>
            </div>
        {children}
    </div> );
}
 
export default Header;