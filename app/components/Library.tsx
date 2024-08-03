
'use client';

import { TbPlaylist } from 'react-icons/tb';
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from '@/hooks/useAuthModal';

import useUploadModal from '@/hooks/useUploadModal';
import { useUser } from '@/hooks/useUser';


const Library = () => {
    const authModal = useAuthModal();

    const uploadModal= useUploadModal();
    const {user}= useUser();
    const onClik=() =>{
        if (!user) {
            return authModal.onOpen();            
        }

        //subscription
        return uploadModal.onOpen();

    }

    return ( 
        <div className="flex flex-col ">
            
            <div className="flex items-center justify-between px-5 pt-4">
                                
                        <div className="inline-flex items-center gap-x-2 ">
                          
                        <span className='text-neutral-400'>
                            <TbPlaylist  size={26} />
                        </span>

                        <p className='text-neutral-400 font-medium text-md'>
                            Your Library
                        </p>

                        </div >

                        <span onClick={onClik} className='text-neutral-400 cursor-pointer hover:text-white transition '>
                            <AiOutlinePlus size={20} />
                        </span>

            </div>
            <div className='flex flex-col gap-y-2 ml-11 mt-4 px-3'>
        list of song
                        </div>
        </div>
     );
}
 
export default Library;