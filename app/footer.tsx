import Link from "next/link";
import { Animation } from "@/utils/animation/animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faSoundcloud, faYoutube, faFacebook} from "@fortawesome/free-brands-svg-icons";
import Section from "@/components/section";

export default function Footer(){
    return (
    <>
    <Animation mode={'wait'} initial={false}>
        <Section>
            <div className={`w-full sticky my-2 bottom-0 bg-[#66686b] p-16`}>
                <div className="flex flex-col md:flex-row justify-between text-white max-w-6xl mx-auto gap-10">
                <div className="flex flex-col content-center max-w-md gap-5">
                    <h2 className="text-bold text-2xl">
                    Who We Are
                    </h2>
                    <hr>
                    </hr>
                    <p>Community Connections for Independent Living, LLC is a group of caring professionals 
                        dedicated to the residents we service, individuals who sustained Traumatic Brain Injury (TBI). 
                        We realize that each of our residents has a unique journey to recovery ahead of them. 
                        Therefore, we develop an individualized rehabilitation plan that ensures they learn the 
                        skills and tools they need to successfully navigate school, work and daily life. 
                        Ultimately our role is to be supportive and help our residents reach their goals 
                        and move forward with their rehabilitation.</p>
                </div>
                <div className="flex flex-col md:ml-auto content-center gap-5">
                <div className="mx-auto">
                    image goes here
                </div>
                <hr></hr>
                <div className="w-32">
                    <p>
                    Mailing Address
13335 15 Mile Rd., Ste. 244
Sterling Heights, MI 48312
                    </p>
                </div>
                <div>
                    <p>
                    {`P(248) 410-2715
                    F(586) 573-6397`}
                    </p>
                </div>
                <button className="bg-[#2852ab] p-5 rounded-full uppercase mx-auto">contact us</button>
                </div>
                </div>
                <p className="text-center font-mono text-xs text-white pt-20">©Copyright 2023 Community Connections. All Rights Reserved. Privacy Policy</p>
            </div>
        </Section>
        </Animation>
    </>
    )
}