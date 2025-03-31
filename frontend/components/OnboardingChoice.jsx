"use client"

import { allRoles } from "@/constants/rootConstant";
import { OnboardingRequest } from "@/lib/actions/onboarding.action";
import { useRouter } from "next/navigation";

const OnboardingChoice = ({ userId }) => {
    const router = useRouter();
    async function handleOnboardingChoice() {
        const roles = [allRoles.employee];
        const onboarding = await OnboardingRequest({ userId, roles });
        if (onboarding.success && onboarding.onboarded) {
            router.push("/dashboard");
        } else {
            router.push("/employee");
        }
    }
    return (
        <button onClick={handleOnboardingChoice}>Click</button>
    )
}

export default OnboardingChoice;