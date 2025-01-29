import { supabase } from "./supabase";

export async function getUser(email) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error) {
    console.log("couldn't fetch user's info", error);

    return null;
  }

  return data;
}

export async function createUser(newUser) {
  const { data, error } = await supabase.from("users").insert([newUser]);
  if (error) {
    console.log(error);

    throw new Error("User could not be created");
  }
  return data;
}

export async function getAllUserNames() {
  const { data, error } = await supabase.from("users").select("userName");

  if (error) throw new Error("Couldn't fetch usernames", error);

  return data;
}
