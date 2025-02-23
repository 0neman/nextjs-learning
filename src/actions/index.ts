"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editSnippet(id:number, code:string) {
    await db.snippet.update({
        where:{id},
        data:{code}
    });
    redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id:number) {
    await db.snippet.delete({
        where:{id},
    });
    redirect(`/`);
}

export async function createNewSnippet(formState:{message:string} ,formdata: FormData) {

    const title = formdata.get('title');
    const code = formdata.get('code');

    if (typeof title !== 'string') {
        return {message:'Wrong title entered'}
    }
    if (title.length < 3) {
        return {message:'Title must be longer'};
    }
    if (typeof code !== 'string') {
        return {message:'Wrong Code entered'}
    }
    if (code.length < 10) {
        return {message:'Code must be longer'};
    }

    await db.snippet.create({
        data: {
            title,
            code
        }
    });


    redirect('/');
}


