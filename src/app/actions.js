"use server";

import { sql } from "@vercel/postgres";

import { v4 } from "uuid";

async function countWaitlist() {
  const { rows, fields } = await sql`SELECT COUNT(email) from waitlist`;
  return parseInt(rows[0].count);
}

export async function createWaitlist(prevState, formData) {
  // Insert the email into the waitlist table
  let existingCount = 4870;
  let email = formData.get("email")?.toString() ?? "";
  let shareID = v4();
  let shortShareID = shareID.substring(0, 8);
  // Make sure the email is not empty
  if (!email || email === "") {
    return {
      success: false,
      error: "Email is required",
    };
  }
  await sql`INSERT INTO WAITLIST (email, share_id) VALUES (${email}, ${shortShareID})`;
  let count = await countWaitlist();

  return {
    success: true,
    shareId: shortShareID,
    waitlistCount: existingCount + count,
  };
}
