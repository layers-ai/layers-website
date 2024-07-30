"use server";

const axios = require("axios");

import { revalidatePath } from "next/cache";

import { v4 } from "uuid";

const mailerliteApiKey = process.env.MAILERLITE_API_KEY;
const mailerliteGroupId = process.env.MAILERLITE_GROUP_ID;

async function addSubscriber(email, shareId) {
  const url = "https://connect.mailerlite.com/api/subscribers";
  const headers = {
    Authorization: `Bearer ${mailerliteApiKey}`,
    "Content-Type": "application/json",
  };
  const data = {
    email: email,
    groups: [mailerliteGroupId],
    fields: {
      share_id: shareId,
    },
  };

  try {
    const response = await axios.post(url, data, { headers });
  } catch (error) {
    console.error(
      "Error adding subscriber:",
      error.response ? error.response.data : error.message
    );
  }
}

export async function createWaitlist(prevState, formData) {
  // Add the email in Mailerlite
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

  await addSubscriber(email, shortShareID);

  // clean cache for updated count
  revalidatePath("/");

  return {
    success: true,
    shareId: shortShareID,
  };
}
