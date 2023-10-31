'use client';
import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavLink({path, text}){
    const pathname = usePathname()
    return(
    <li className={`transition ease-in-out delay-200 pt-7 max-w-[70px] ${pathname == path ? "border-b-0 border-r-0 border-l-0 border-2 border-pink -mt-[2px] -mb-[2px]" : ""} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-pink hover:-mt-[2px] hover:-mb-[2px]`}>
                  <Link
                  className="font-sans uppercase font-bold text-sm whitespace-nowrap text-white md:text-blue2" 
                  href={path}
                  >
                    {text}
                  </Link>
                </li>
    )
}

export function NavListLink({items, path, text, onMouseLeave, onMouseOver, onClick, listState}){
  const pathname = usePathname()
    return(
<li className={`transition ease-in-out delay-200 duration-300 pt-7 max-w-[70px] ${pathname.slice(0,6) == path ? "border-b-0 border-r-0 border-l-0 border-2 border-pink -mt-[2px] -mb-[2px]" : ""} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-pink hover:-mt-[2px] hover:-mb-[2px]`}>
<button
 className="font-sans uppercase text-sm whitespace-nowrap font-bold text-white md:text-blue2"  
onMouseOver={onMouseOver} 
onClick={onClick} >
  {text}
  </button>
  <ul onMouseLeave={onMouseLeave} className={`absolute mt-4 ${listState ? "bg-blue1 text-white rounded-md gap-7" : "hidden"}`}>
  <div className="-mt-4 -mb-4 ml-2 w-0 h-0 
    border-l-[25px] border-l-transparent
    border-b-[35px] border-blue1
    border-r-[25px] border-r-transparent">
  </div>
  {items.map(item =>(
    <div key={item.id} className={`transition ease-in-out delay-50 duration-300 bg-blue1 hover:bg-blue2 hover:scale-[1.03] rounded-md`}>
    <NavListInnerLink linkpath={item.linkpath} text={item.text}/>
    </div>
  ))}
 </ul>
</li>
    )
}

export function NavListInnerLink({linkpath, text}){
    return(
            <Link
            className="transition ease-in-out delay-200 block uppercase font-bold text-xs md:bg-blue1 text-white rounded-md hover:text-pink md:hover:bg-blue2 py-4 px-5 whitespace-nowrap tracking-widest w-full md:text-left bg-blue2" 
            href={linkpath}
            prefetch
            >
            {text}
            </Link>
    )
}
