import { cookies } from "next/headers";
import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import config from "@/app/amplifyconfiguration.json";

export const serverClient = generateServerClientUsingCookies({
  config,
  cookies,
}); 

export const { runWithAmplifyServerContext } = createServerRunner({
    config,
  });