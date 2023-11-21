import ImageHandler from "../image-handler"
import Link from "next/link"
export default function HeaderContact(){
    return(
        <div className="relative w-full hidden md:flex flex-row justify-between mx-auto bg-white md:bg-transparent bg-opacity-50">
        <div className={`flex flex-row gap-2 items-center`}>
          <ImageHandler src={'public/Icons/phone.svg'} height={24} width={24} alt='phone icon'/>
          <h3 className="uppercase font-[700] text-blue1 whitespace-nowrap tracking-widest pb-1">{`(248) 410-2715`}</h3>
        </div>
        <div className="icon-scroll"></div>
        <Link href="/contact" >
          <h3 className="uppercase font-[700] text-blue1 whitespace-nowrap tracking-widest">
            Contact Us
          </h3>
        </Link>
      </div>
    )
}