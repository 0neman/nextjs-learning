'use client';
import {
    NavbarItem as NavbItem,
    Button,
    Avatar,
    Popover,
    PopoverTrigger,
    PopoverContent
} from "@nextui-org/react";
import { signIn, signOut } from "@/actions/index";
import { useSession } from "next-auth/react";

export default function HeaderAuth() {
    const session = useSession();
    
    let authContent: React.ReactNode;
    if (session.status === "loading") {
        authContent = null;
    } else if (session.data?.user) {
        authContent =
            <>
                <Popover placement="bottom">
                    <PopoverTrigger>
                        <Avatar src={session.data.user.image || ''} />
                    </PopoverTrigger>
                <PopoverContent>
                    <div className="p-4">
                        <form action={signOut}>
                            <Button type="submit">Sign Out</Button>
                        </form>
                    </div>
                </PopoverContent>   
                </Popover>
            </>
    } else {
        authContent = <>
            <form action={signIn}>
                <NavbItem>
                    <Button type="submit" color="secondary" variant="bordered">Sign In</Button>
                </NavbItem>
            </form>
            <form action={signIn}>
                <NavbItem>
                    <Button type="submit" color="primary" variant="bordered">Sign Up</Button>
                </NavbItem>
            </form>
        </>
    }
    return authContent
}
