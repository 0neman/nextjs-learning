import Link from 'next/link';

export default function NavigationBar() {
    return (
            <nav className=''>
                <Link href={"/"}>Home</Link>
                <Link href={"/snippets/new"}>Create New Snippets</Link>
            </nav>
    );
}