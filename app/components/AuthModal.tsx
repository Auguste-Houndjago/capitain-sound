"use client"
import React, { useEffect } from 'react';
import Modal from './Modal';
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

import useAuthModal from "@/hooks/useAuthModal"

const AuthModal = () => {
const supabaseClient = useSupabaseClient();
const router = useRouter();
const {session} =useSessionContext();
const { onClose , isOpen} = useAuthModal()
const OnChange =(open:boolean)=>{
    if (!open) {
        onClose();
    }
}

useEffect(() => {
    if (session) {
        router.refresh();
        onClose();
    }
    return () => {
        
    };
}, [session, router , onClose]);

    return ( 
        <Modal title='welcome '
        description='Login to your account'
        isOpen={isOpen}
        onChange={OnChange}

        >

        <Auth
        theme='dark'
        magicLink
        providers={["github", "discord", "google"]}
        supabaseClient={supabaseClient}

        appearance={{
            theme:ThemeSupa,
            variables:{
                default:{
                    colors:{
                        brand: '#404040',
                        brandAccent:'#22c55e'
                    }
                }
            }
        }}
         />
        </Modal>
    
);
}
 
export default AuthModal;

