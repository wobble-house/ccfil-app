import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import NavHeader from "@/components/header/header"
import { LoginForm } from "@/components/login"

export const metadata = {
  title: 'Login',
  description: `Improved quality of life is our set standard; we won't settle for anything less.`
}

export default function Login() {
  return (
   <>
      <NavHeader description={metadata.description} title={metadata.title} bgimage={0}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
            <div className="flex relative z-50 w-full h-full bg-gray1 mx-auto justify-center p-16">
              <LoginForm/>
            </div>
        </Suspense>
      </Animation>
   </>
  )
}