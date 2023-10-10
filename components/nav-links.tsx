'use client';
import Link from "next/link"
import { usePathname } from "next/navigation"

export const aboutList = [
    {id:`Our Commitment`, linkpath:`/about/commitment`, text:`Our Commitment`},
    {id:`Team`, linkpath:`/about/team`, text:`Team`},
    {id:`Strategic Plan`, linkpath:`/about/strategic-plan`, text:`Strategic Plan`},
    {id:`Code of Ethics`, linkpath:`/about/code-of-ethics`, text:`Code of Ethics`}
  ]

export const servicesList = [
    {id:`Program Components`, linkpath:`/services/program-components`, text:`Program Components`},
    {id:`Semi-Independent Residential Programs`, linkpath:`/services/residential-program`, text:`Semi-Independent Residential Programs`},
    {id:`Supported Employment`, linkpath:`/services/supported-employment`, text:`Supported Employment`}
  ]

export function NavLink({path, text}){
    const pathname = usePathname()
    return(
    <li className={`transition ease-in-out delay-200 pt-7 max-w-[70px] ${pathname == path ? "border-b-0 border-r-0 border-l-0 border-2 border-pink -mt-[2px] -mb-[2px]" : ""} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-pink hover:-mt-[2px] hover:-mb-[2px]`}>
                  <Link
                  className="font-sans uppercase font-bold text-sm whitespace-nowrap text-white md:text-blue2" 
                  href={path}
                  prefetch>
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
            className="transition ease-in-out delay-200 block uppercase font-bold text-xs bg-blue1 text-white rounded-md hover:text-pink hover:bg-blue2 py-4 px-5 whitespace-nowrap tracking-widest w-full text-left" 
            href={linkpath}
            prefetch
            >
            {text}
            </Link>
    )
}

export function NavHeader({description, navbar, title}){
  const pathname = usePathname()
    return(
        <>
        {pathname != "/" ? 
        <><div className={`flex flex-col gap-6 px-16 py-20 bg-transparent border-solid border-white mx-16 mb-16 border-[10px] ${!navbar ? "visible" : "hidden"}`}>
          <h1 className="text-6xl font-black text-blue2">{title}</h1>
          <h3 className="text-blue1 font-bold text-2xl">{description}</h3>
          </div></> 
          : 
          <><div className={`flex flex-col gap-6 md:3/4 lg:w-3/5 p-16 bg-transparent bg-opacity-50 border-solid border-white mx-16 mb-10 border-[10px] ${!navbar ? "visible" : "hidden"}`}>
          <h3 className="text-blue1 font-bold text-2xl">{description}</h3>
          <h1 className="text-6xl font-black text-blue2">{title}</h1>
          <button className="mr-auto bg-blue1 rounded-full px-10 py-2 text-xl font-bold uppercase text-white hover:text-blue2 hover:bg-white hover:bg-opacity-25 hover:border-2 hover:border-blue2 hover:-mb-[3px]">button</button>
          </div>
           <div className="flex flex-row justify-between px-10 invisible md:visible m-10">
            <h3 className="uppercase font-[700] text-blue1 whitespace-nowrap tracking-widest">{`(248) 410-2715`}</h3>
            <p>{`-->`}</p>
            <Link href="/contact" >
              <h3 className="uppercase font-[700] text-blue1 whitespace-nowrap tracking-widest">
                  Contact Us
                  </h3>
                  </Link>
          </div></>
          }
          
          </>
    )
}