"use server"
import * as auth from "@/auth";

export async function signIn() {
    const signIn = await auth.signIn("github");
    return signIn;
}