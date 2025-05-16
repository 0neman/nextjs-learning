import Link from "next/link";
import {
    Navbar as Navb,
    NavbarBrand as NavbBrand,
    NavbarContent as NavbContent,
    NavbarItem as NavbItem,
    Input as HeroInput,
    // Button,
    // Avatar
} from "@nextui-org/react";

import { auth } from "@/auth";

export default async function Header() {
    const session = await auth();
    return (
        <Navb className="shadow mb-6">
            <NavbBrand>
                <Link href="/" className="font-bold">Discuss</Link>
            </NavbBrand>
            
            <NavbContent justify="center">
                <NavbItem>
                    <HeroInput />
                </NavbItem>
            </NavbContent>
            
            <NavbContent justify="end">
                <NavbItem>
                    {
                        session?.user ? <div>Signed In</div> : <div>Signed Out</div>
                    }
                </NavbItem>
            </NavbContent>
        </Navb>
    );
}