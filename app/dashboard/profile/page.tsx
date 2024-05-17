import Nav from "@/components/navigation/nav"
import { HeaderBGCarousel } from "@/components/header/header-bg-carousel"
import { carouselSlides } from "@/lib/data/data"
import SignInForm from "@/components/forms/sign-in-form"
import { HeadshotHandler } from "@/utils/image-handler"
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const dynamic = 'force-dynamic'
export const revalidate = 0;

export default async function Profile() {

  return (
     <div className="max-w-screen">
      <HeaderBGCarousel carouselSlides={carouselSlides} position={"fixed"}/>
      <Nav mini/>
      <SignInForm/>
      <h2 className="relative text-6xl uppercase text-blue2 text-center bg-gray1 mx-auto max-w-md rounded full bg-opacity-75 mb-16 p-4 mt-16">Profile</h2>
        <div className="relative flex flex-col bg-white/75 max-w-3xl mx-auto gap-6 p-20">
          <div className="flex flex-col">
            <HeadshotHandler src={'Marc3.jpg'} alt={'marcus placeholder img'} fallbackSrc={'oof.png'} className="object-top" />
            <button>
              update
              </button>
          </div>
          
          <h3 className="flex text-2xl">
          Hi _______, 
          </h3>
          <div className="flex flex-col">
            <p>title:</p>
              <input placeholder="this is your current title">
                </input>
            <p>bio:</p>
              <input placeholder="this is your current bio">
                </input>
            <button>
              update
              </button>
          </div>
        </div>
   </div>
  )
}