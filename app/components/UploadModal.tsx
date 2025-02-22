"use client"

import useUploadModal from '@/hooks/useUploadModal';
import Modal from './Modal';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from './Input';
import Button from './Button';
import toast from 'react-hot-toast';
import { useUser } from '@/hooks/useUser';
import uniqid from "uniqid";
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const UploadModal = () => {
    const uploadModal= useUploadModal();
    const [isLoading, setIsLoading] = useState(false);
    const {user }= useUser();
    const supabaseClient=useSupabaseClient();

    const {
        register,handleSubmit ,reset
    } =useForm<FieldValues>({
        defaultValues:{
            author:'',
            title:'',
            song: null,
            Image:null,
        }
    })

    const onChange=(open: boolean) =>{
        if (!open) {
            reset();
            uploadModal.onClose();
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = async(values)=>{
        try {
            setIsLoading(true);
            const imageFile = values.image?.[0];
            const songFile =values.song?.[0];

            if (!imageFile || !songFile || !user) {
                toast.error('Missing fields');
                return;
            }
            const uniqueID= uniqid();
        } catch (error) {
            toast.error("Error in Submission");

        } finally{
            setIsLoading(false);
        }
    }

    return ( 
        <Modal
        title='Add a song'
        description='Upload an mp3 file'
        isOpen={uploadModal.isOpen}
        onChange={()=>{}}
        >
            <form onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-y-4'
            >
                <Input
                id="title"
                disabled={isLoading}
                {...register('title', {required:true})}
                placeholder='Song title'
                />

                <Input
                id="author"
                disabled={isLoading}
                {...register('author', {required:true})}
                placeholder='Song author'
                />
            <div>
                
                <div className='pb-1'>
                    Select a song file
                </div>
                <Input
                id="song"
                type='file'
                disabled={isLoading}
                {...register('song', {required:true})}
                accept='.mp3,.ogg'
                />

            </div>
            <div>
                
                <div className='pb-1'>
                    Select an image
                </div>
                <Input
                id="image"
                type='file'
                disabled={isLoading}
                 accept='image/*'
                {...register('song', {required:true})}
               
                />
                
            </div>
            <Button disabled={isLoading} type='submit'>
                Create
            </Button>

            </form>
        </Modal>
     );
}
 
export default UploadModal;