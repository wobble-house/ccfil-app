import Link from "next/link";
export default function Button({className, text, link}){
    return (
        <button className={className}><Link href={link}>{text}</Link></button>
    )
}