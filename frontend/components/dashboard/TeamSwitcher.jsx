"use client";

import { useState } from "react"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

export function TeamSwitcher({
    teams,
}) {
    const [activeTeam] = useState(teams[0])

    if (!activeTeam) return null;

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <div className="flex aspect-square size-8 items-center 
                    justify-center rounded-lg bg-green-400 text-sidebar-primary-foreground"
                    >
                        <activeTeam.logo className="size-4 text-green-900" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                            {activeTeam.name}
                        </span>
                        <span className="truncate text-xs">{activeTeam.plan}</span>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
