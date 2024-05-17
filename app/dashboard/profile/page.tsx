import Nav from "@/components/navigation/nav"
import { HeaderBGCarousel } from "@/components/header/header-bg-carousel"
import { carouselSlides } from "@/lib/data/data"
import SignInForm from "@/components/forms/sign-in-form"
import ProfileCard from "@/components/cards/profile-card"
import { cookies } from 'next/headers';
import { getCurrentUser} from 'aws-amplify/auth/server';
import { runWithAmplifyServerContext } from "@/utils/server-utils"

export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const dynamic = 'force-dynamic'
export const revalidate = 0;

export default async function Profile() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec)
    });
    return (
      <div className="max-w-screen">
      <HeaderBGCarousel carouselSlides={carouselSlides} position={"fixed"}/>
      <Nav mini/>
      <SignInForm/>
      <h2 className="relative text-6xl uppercase text-blue2 text-center bg-gray1 mx-auto max-w-md rounded full bg-opacity-75 mb-16 p-4 mt-16">Profile</h2>
        <ProfileCard id={currentUser.userId}/>
   </div>
    );
  } catch (error) {
    console.error(error);
    return <p>Something went wrong...</p>;
  }
}