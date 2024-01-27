import React from 'react'
import { useModalStore } from "../store/store";
import { IoIosCloseCircleOutline } from "react-icons/io";



interface ModalStore {
  isOpen: boolean;
  toggleModal: () => void;
}

const CustomModal = () => {
  const { isOpen, toggleModal } = useModalStore() as ModalStore;

  return (
    <div className=' absolute left-0 right-0 top-0 bottom-0 h-full bg-white/10 z-50 text-white  flex justify-center items-center ' onClick={toggleModal} >



      <div className=' max-h-[500px] max-w-md bg-zinc-900/90 p-5 rounded-lg relative '>
        <IoIosCloseCircleOutline onClick={toggleModal} className=' absolute top-4 right-4' />

        <div className=' mt-4'>

          <p>Marcus Bergson </p>
        </div>

      </div>


    </div>
  )
}

export default CustomModal