import SnippetEditForm from "@/components/snippets-edit-form";
import { db } from "@/db";
import { notFound } from "next/navigation";

type SnippetShowPageProps = Promise<{ id: string }>;

// interface SnippetEditPageProps{
//     params: {
//         id: string;
//     }
// }

export default async function SnippetEditPage({ params }: { params: SnippetShowPageProps }) {
    const getId = await params;
    const id = parseInt(getId.id);
    const snippet = await db.snippet.findFirst({
        where: {
        id
        },
    },
    );

    if (!snippet) {
        return notFound();
    } 

    return (
        <div>
            <SnippetEditForm snippet={snippet} />
        </div>
    );
}