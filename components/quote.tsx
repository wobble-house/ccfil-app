import Image from "next/image"
export default function QuoteSection({quote, quoteName}:{quote:string, quoteName: string}){
    return(
        <div className="flex flex-col">

        <div className="fixed top-0 left-0 w-full -z-10">
            <Image src={`https://ccfil.com/wp-content/uploads/2016/08/happiness-quote.jpg`} width={2560} height={1440} alt="background image of smiling people"/>
        </div>
                <div className="flex flex-col max-w-3xl bg-transparent mx-auto h-[400px] z-10 justify-center gap-14">
        <h2 className="text-left italic font-thin text-4xl text-white">{quote}</h2>
                    <h3 className="text-left font-bold uppercase text-white">
                {quoteName}
            </h3></div>
        </div>
    )
}
