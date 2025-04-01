"use server"

import * as auth from "@/auth";

export async function signIn() {
    const signIn = await auth.signIn("github");
    return signIn;
}

export async function signOut() {
    const signOut = await auth.signOut();
    return signOut;
}