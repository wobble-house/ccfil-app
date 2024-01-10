import { serverClient } from "@/utils/server-utils";
import { listHeadshots,listIcons,listServices,listTeamMembers, listReferrals} from "@/utils/graphql/queries";

export async function getTeamData(variables?){
    const {data, errors} = await serverClient.graphql({
      query: listTeamMembers,
      variables: (variables || null)
    })
    const members = data?.listTeamMembers?.items
    members.sort((a,b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0))
    return {data, errors}
    
  };
export async function getProgramServices(variables?){
    const {data, errors} = await serverClient.graphql({
        query: listServices,
        variables: (variables || null)
    })
    return {data, errors}
}
export async function getHeadshots(variables?){
    const {data, errors} = await serverClient.graphql({
        query: listHeadshots,
        variables: (variables || null)
    })
    return {data, errors}
}
export async function getIcons(variables?){
    const {data, errors} = await serverClient.graphql({
        query: listIcons,
        variables: (variables || null)
    })
    return {data, errors}
}
export async function getReferrals(variables?){
    const {data, errors} = await serverClient.graphql({
      query: listReferrals,
      variables: (variables || null)
    })
    return {data, errors}
  };