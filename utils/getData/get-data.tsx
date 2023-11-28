import { serverClient } from "@/utils/server-utils";
import * as query from "@/utils/graphql/queries";
import { listHeadshots,listIcons,listServices,listTeamMembers} from "@/utils/graphql/queries";

export async function getTeamData(variables?){
    const {data, errors} = await serverClient.graphql({
      query: listTeamMembers,
      variables: (variables || null)
    })
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