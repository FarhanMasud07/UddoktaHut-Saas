import { Stepper } from "@/components/stepper/Stepper";
import { StepperProvider } from "../context/StepperContext";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { NavUser } from "@/components/dashboard/NavUser";
import { headers } from "next/headers";
import { getOnboardedUser } from "@/lib/actions/auth.action";
import { UserProvider } from "../context/UserContext";

export default async function Onboarding() {
    const requestHeader = await headers();
    const id = requestHeader.get('x-user-id');
    const userOnboarded = await getOnboardedUser({ id });
    return (
        <main className="p-6" >
            <UserProvider initialData={userOnboarded}>
                <StepperProvider>
                    <SidebarProvider>
                        <SidebarInset>
                            <header className="flex h-16 shrink-0 items-center justify-between 
                            gap-2 transition-[width,height] relative
                            ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                                <div className="absolute flex items-center gap-7 px-4 right-0">
                                    <NavUser isOnboarded={false} />
                                </div>
                            </header>
                            <Stepper />
                        </SidebarInset>
                    </SidebarProvider>
                </StepperProvider>
            </UserProvider>
        </main >
    )
}