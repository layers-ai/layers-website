"use server";

import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import * as mutations from "@/graphql/mutations";

import config from "@/amplifyconfiguration.json";

import { v4 } from "uuid";

const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies,
});

async function countWaitlist() {
  const currentStage = process.env.AWS_AMPLIFY_ENV || "dev";

  try {
    const response = await fetch(
      `https://d5qp6v9we5.execute-api.us-east-1.amazonaws.com/${currentStage}/waitlistcount`
    );
    const data = await response.json();
    return data.count;
  } catch (error) {
    console.error(error);
    return 0;
  }
}

export async function createWaitlist(prevState, formData) {
  const { data } = await cookiesClient.graphql({
    query: mutations.createWaitlist,
    variables: {
      input: {
        email: formData.get("email")?.toString() ?? "",
      },
    },
  });

  let userCount = await countWaitlist();

  revalidatePath("/");

  return {
    success: true,
    shareId: v4(),
    waitlistCount: userCount,
  };
}
