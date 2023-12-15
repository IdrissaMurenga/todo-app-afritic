import Image from 'next/image'
import { BsFillClipboardPlusFill } from "react-icons/bs";

const TodoHeader = ({setOpenModal}) => {
  return (
    <div>
      <Image src="/bg-desktop-dark.jpg" alt='bg-image' width={7000} height={100} />
      <div className='flex items-center justify-between w-96 mx-auto -mt-12'>
        <h1 className='text-2xl font-bold text-slate-50'>TODO</h1>
        <BsFillClipboardPlusFill className='cursor-pointer' fill='#A7F432' size={30} onClick={()=>setOpenModal(true)} />
      </div>
    </div>
  )
}

export default TodoHeader
