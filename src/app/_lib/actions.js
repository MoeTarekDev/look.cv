"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

async function getUserName() {
  const session = await auth();
  console.log(session);
}

export async function signInToGoogleAction() {
  await signIn("google", { redirectTo: "/userNamePlaceHolder" });
  getUserName();
}
export async function signInToGithubAction() {
  await signIn("github", { redirectTo: "/userNamePlaceHolder" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/login" });
}

export async function updateUserInfo(values) {
  const session = await auth();
  if (!session?.user) throw new Error("Not authenticated");

  const { userName, fullName } = values;
  const { data, error } = await supabase
    .from("users")
    .update({ userName, fullName, isComplete: true })
    .eq("id", session.user.userId)
    .select("userName")
    .single();

  if (error) throw new Error("Failed to update user info.");

  revalidatePath("/");

  return data.userName;
}
