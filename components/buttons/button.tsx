import Link from "next/link";
export default function Button({text, link}){
    return (
        <button className={`border-2 border-blue2 rounded-full px-4 hover:scale-[1.02] hover:bg-blue2 hover:text-white active:scale-95 text-nowrap`}><Link href={link}>{text}</Link></button>
    )
}