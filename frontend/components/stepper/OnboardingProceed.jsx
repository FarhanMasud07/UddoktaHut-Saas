"use client";

import { allRoles } from "@/constants/rootConstant";
import OnboardProceedForm from "../form/OnboardProceedForm";

const OnboardingProceed = ({ isEmployee }) => {
    if (isEmployee) {
        return (
            <section>
                This is employee
            </section>
        )
    }
    return (
        <section>
            <h3 className="text-dark-400 dark:text-dark-700 
                text-[20px] md:text-2xl font-bold">
                You are almost done 👋
            </h3>

            <div className="flex flex-col text-[14px] md:text-[15px] py-2 pl-1 text-dark-600 font-medium">
                <span >Fill out the form to start your business. We're here to support you every step of the way.</span>
            </div>
            <OnboardProceedForm role={isEmployee ? allRoles.employee : allRoles.admin} />
        </section>
    )
}

export default OnboardingProceed