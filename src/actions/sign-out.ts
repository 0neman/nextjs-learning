"use server"

import * as auth from "@/auth";

export async function signOut() {
    const signOut = await auth.signOut();
    return signOut;
}