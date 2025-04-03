import { Stepper } from "@/components/stepper/Stepper";
import { StepperProvider } from "../context/StepperContext";

export default async function Onboarding() {
    return (
        <main className="p-6" >
            <StepperProvider>
                <Stepper />
            </StepperProvider>

        </main >
    )
}