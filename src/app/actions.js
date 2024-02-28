"use server";

import { cookies } from "next/headers";

import { v4 } from "uuid";

async function countWaitlist() {
  return 0;
}

export async function createWaitlist(prevState, formData) {
  let shareID = v4();
  let shortShareID = shareID.substring(0, 8);
  return {
    success: true,
    shareId: shortShareID,
    waitlistCount: 5432,
  };
}
