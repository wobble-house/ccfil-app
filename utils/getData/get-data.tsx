import { serverClient } from "@/utils/server-utils";
import { listHeadshots,listIcons,listServices,listTeamMembers, listReferrals, getUser, listFeatureFeedbacks} from "@/utils/graphql/queries";

export async function getTeamData(variables?){
    const {data, errors} = await serverClient.graphql({
      query: listTeamMembers,
      variables: (variables || null)
    })
    data?.listTeamMembers?.items.sort((a,b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0)).sort((a,b) => (a.featurePosition > b.featurePosition) ? -1 : ((b.featurePosition > a.featurePosition) ? 1 : 0))
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

export async function getfeatureFeedback(variables?){
    const {data, errors} = await serverClient.graphql({
      query: listFeatureFeedbacks,
      variables: (variables || null)
    })
    return {data, errors}
  };

export async function getCurrentUserFromServer(variables?){
    const {data, errors} = await serverClient.graphql({
        query: getUser,
        variables: (variables || null)
    })
    return {data, errors}
}
