import Link from "next/link";
import {
    Navbar as Navb,
    NavbarBrand as NavbBrand,
    NavbarContent as NavbContent,
    NavbarItem as NavbItem,
    Input as HeroInput,
    
} from "@nextui-org/react";
import HeaderAuth from "./header-auth";


export default function Header() {
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
                
                <HeaderAuth/>
                
            </NavbContent>
        </Navb>
    );
}