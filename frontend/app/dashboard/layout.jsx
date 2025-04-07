import { getAuthenticUser } from '@/lib/actions/auth.action'
import { headers } from 'next/headers';
import { UserProvider } from '../context/UserContext';
import { redirect } from 'next/navigation';
import { AppSidebar } from "@/components/dashboard/AppSidebar"
import { NavUser } from "@/components/dashboard/NavUser"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export default async function layout({ children }) {
    const requestHeader = await headers();
    const id = requestHeader.get('x-user-id');
    const { user } = await getAuthenticUser({ id });
    if (!user) redirect('/logout');
    if (!user.onboarded) redirect('/logout');
    const userOnboarded = user;
    return (
        <div>
            <UserProvider initialData={userOnboarded}>
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                            <div className="flex items-center gap-2 px-4">
                                <SidebarTrigger className="-ml-1 cursor-pointer" />
                                <Separator orientation="vertical" className="mr-2 h-4" />
                            </div>
                            <div className="flex items-center gap-7 px-4">
                                <NavUser />
                            </div>
                        </header>
                        {user.isActive ? children : "Get subscription please"}
                    </SidebarInset>
                </SidebarProvider>
            </UserProvider>
        </div>
    )
}