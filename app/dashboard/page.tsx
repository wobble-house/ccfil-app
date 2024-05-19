import Nav from "@/components/navigation/nav"
import { HeaderBGCarousel } from "@/components/header/header-bg-carousel"
import { carouselSlides } from "@/lib/data/data"
import SignInForm from "@/components/forms/sign-in-form"
import WelcomeMessage from "@/components/cards/welcome-message"
import { cookies } from 'next/headers';
import { getCurrentUser} from 'aws-amplify/auth/server';
import { runWithAmplifyServerContext } from "@/utils/server-utils"
import { getfeatureFeedback } from '@/utils/getData/get-data'
import FeatureFeedbackList from "@/components/lists/featureFeedback-list"

export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const dynamic = 'force-dynamic'
export const revalidate = 0;

export default async function Dashboard() {
  const feedbackData = await getfeatureFeedback()
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
      <h2 className="relative text-6xl uppercase text-blue2 text-center bg-gray1 mx-auto max-w-md rounded full bg-opacity-75 mb-16 p-4 mt-16">Dashboard</h2>
      <div className="relative flex flex-col justify-center gap-8">
        <WelcomeMessage id={currentUser.userId}/>
        <div className="relative flex justify-center rounded-md">
          <FeatureFeedbackList data={feedbackData.data.listFeatureFeedbacks.items} title={'Feature Feedback'}/>
        </div>
      </div>
   </div>
  )
} catch (error) {
  console.error(error);
  return <p>Something went wrong...</p>;
}
}