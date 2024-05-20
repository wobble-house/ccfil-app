import { getCurrentUserFromServer } from "@/utils/getData/get-data";
import { GetUserQueryVariables } from "@/utils/graphql/API";
import ProfileHeadshot from "./profile-heashot";
 
export default async function ProfileCard({id}:{id: string}){

  const userVariables: GetUserQueryVariables = {
      id: id
  };
  const user = await getCurrentUserFromServer(userVariables)

    return(
        <div className="relative flex bg-white/75 max-w-xl mx-auto gap-6 p-10 justify-evenly">
          <ProfileHeadshot user={user.data.getUser} src={user.data.getUser.Headshot.src} alt={user.data.getUser.Headshot.alt}/>
          <div className="flex flex-col">
            <p>First Name:</p>
              <input placeholder={user.data.getUser.firstName}>
                </input>
            <p>Last Name:</p>
              <input placeholder={user.data.getUser.lastName}>
                </input>
            <p>Title:</p>
              <input placeholder={user.data.getUser.title}>
                </input>
            <p>Bio:</p>
              <textarea placeholder={user.data.getUser.bio}>
                </textarea>
            <button>
              update
              </button>
              </div>
          </div>
    )
}