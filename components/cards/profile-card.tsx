import { HeadshotHandler } from "@/utils/image-handler";
import { getCurrentUserFromServer } from "@/utils/getData/get-data";
import { GetUserQueryVariables } from "@/utils/graphql/API";
 
export default async function ProfileCard({id}:{id: string}){

  const userVariables: GetUserQueryVariables = {
      id: id
  };
  const user = await getCurrentUserFromServer(userVariables)
    return(
        <div className="relative flex flex-col bg-white/75 max-w-3xl mx-auto gap-6 p-20">
          <div className="flex flex-col">
            <HeadshotHandler src={user.data.getUser.Headshot.src} alt={user.data.getUser.Headshot.alt} fallbackSrc={'oof.png'} className="object-top" />
            <button>
              update
              </button>
          </div>
          
          <h3 className="flex text-2xl">
          Hi {user.data.getUser.firstName}, 
          </h3>
          <div className="flex flex-col">
            <p>title:</p>
              <input placeholder={user.data.getUser.title}>
                </input>
            <p>bio:</p>
              <input placeholder={user.data.getUser.bio}>
                </input>
            <button>
              update
              </button>
          </div>
        </div>
    )
}