"use client"


import AuthModal from "@/app/components/AuthModal";


import { useEffect, useState } from "react";


const ModalProvider = () => {
    const [isMounted, setIsMounted]=useState(false);

    useEffect(() => {
        setIsMounted(true)
        return () => {
            
        };
    }, []);

    if(!isMounted){
        return null;
    }

    return ( 
        <>
<AuthModal />

        </>
     );
}
 
export default ModalProvider;