"use client"

import {
    BadgeCheck,
    ChevronsUpDown,
    LogOut,
    Sparkles,
    SunMoon,
} from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import { ModeToggle } from "../common/ModeToggle"
import { useUser } from "@/app/context/UserContext"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useTopLoader } from "nextjs-toploader"

function extractFirstLetterOfUser(user) {
    if (user && user.name) {
        const names = user.name.split(' ');
        if (names[0] && names[1])
            return `${names[0]?.at(0)} ${names[1]?.at(0)}`;
        return `${names[0]?.at(0)}`
    }
    return null;
}

export function NavUser({ isOnboarded = true }) {
    const router = useRouter();
    const loader = useTopLoader();
    const { isMobile } = useSidebar();
    const { user } = useUser();
    let userLetter = extractFirstLetterOfUser(user) || 'SA';

    async function handleLogout() {
        loader.start();
        try {
            router.push('/logout')
        } catch (err) {
            toast('Something went wrong', {
                description: err.message
            });
        } finally {
            loader.done();
        }
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
                        >
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src={user?.avatar} alt={user?.name} />
                                <AvatarFallback className="rounded-lg ">{userLetter}</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">{user?.name}</span>
                                <span className="truncate text-xs">
                                    {user?.email ? user?.email : user?.phoneNumber}
                                </span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4 dark:text-green-400 text-green-500" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage src={user?.avatar} alt={user?.name} />
                                    <AvatarFallback className="rounded-lg">{userLetter}</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">{user?.name}</span>
                                    <span className="truncate text-xs">
                                        {user?.email ? user?.email : user?.phoneNumber}
                                    </span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {isOnboarded && (
                            <>
                                <DropdownMenuGroup>
                                    <DropdownMenuItem className="cursor-pointer">
                                        <Sparkles className="dark:text-green-400 text-green-500" />
                                        Upgrade to Pro
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem className="cursor-pointer">
                                        <BadgeCheck className="dark:text-green-400 text-green-500" />
                                        Account
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </>
                        )}
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="justify-between cursor-pointer">
                            <section className="flex gap-2 items-center">
                                <SunMoon className="dark:text-green-400 text-green-500" />
                                Dark/Light
                            </section>
                            <ModeToggle />
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                            <LogOut className="dark:text-green-400 text-green-500" />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
