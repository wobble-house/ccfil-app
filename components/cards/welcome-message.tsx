import Button from "../buttons/button"
import { getCurrentUserFromServer } from "@/utils/getData/get-data";
import { GetUserQueryVariables } from "@/utils/graphql/API";

export default async function WelcomeMessage({id}:{id: string}){
    const userVariables: GetUserQueryVariables = {
        id: id
    };
    const user = await getCurrentUserFromServer(userVariables)
    return(
        <div className="relative flex flex-col bg-white/75 max-w-xl mx-auto gap-6 p-10 justify-evenly rounded-md">
          <div className="flex flex-col">
            <h3 className="flex text-2xl">
              Hi {user.data.getUser.firstName}, 
            </h3>
            <p>
              Welcome to your CCFIL Dashboard!
            </p>
          </div>
          <div className="flex gap-8 justify-center">
            <Button link={'/dashboard/profile'} text={'profile'}/>
            <Button link={'/dashboard/referrals'} text={'referrals'}/>
            <Button link={'/dashboard/reports'} text={'reports'}/>
          </div>
        </div>
    )
}