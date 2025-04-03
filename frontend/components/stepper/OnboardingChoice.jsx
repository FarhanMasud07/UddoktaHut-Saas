"use client";

import Image from "next/image";
import { useState } from "react";

const OnboardingChoice = ({ setIsOnboardingDicisionClick, setIsEmployee }) => {
    const [selected, setSelected] = useState('');
    // const router = useRouter();
    // async function handleOnboardingChoice() {
    //     const roles = [allRoles.admin];
    //     const onboarding = await OnboardingRequest({ userId, roles });
    //     if (onboarding.success && onboarding.onboarded) {
    //         router.push("/dashboard");
    //     } else {
    //         router.push("/employee");
    //     }
    // }

    function handleOnclick(isEmployee) {
        setIsOnboardingDicisionClick(true);
        if (isEmployee) {
            setIsEmployee(true);
            setSelected('employee')
        } else {
            setIsEmployee(false);
            setSelected('owner');
        }
    }
    return (
        <section className="flex flex-col gap-4 max-w-[434px] m-auto pb-3.5">
            <h2 className="text-dark-400 dark:text-dark-700 
                text-[24px] md:text-3xl font-bold p-0 m-0">
                Select your role to get started
            </h2>
            <div className="flex flex-col text-[14px] md:text-[16px] pb-2.5 text-dark-600 font-medium">
                <span >Join the Platform as a Business Owner or Explore</span>
                <span>Opportunities as an Employee</span>
            </div>
            <section className='flex  gap-4 '>
                <div className={`relative flex flex-col px-6 py-6  md:px-10 md:py-6
                    rounded-sm  bg-gray-50 dark:bg-dark-400 border border-dark-700 
                    cursor-pointer text-center ${selected === 'owner'
                    && 'border-2 border-green-400 bg-green-50 dark:bg-green-950'
                    }`}
                    onClick={() => handleOnclick(false)}
                >
                    <Image
                        src="/assets/icons/owner.svg"
                        width={130}
                        height={120}
                        alt="Owner"

                    />
                    <span className="dark:text-dark-700 text-green-700 
                        font-medium mt-5 text-[14px] md:text-[15px]">
                        Business Owner
                    </span>
                </div>
                <div className={`relative flex flex-col px-6 py-6 md:px-10 md:py-6 
                    rounded-sm  bg-gray-50 dark:bg-dark-400 border border-dark-700
                    cursor-pointer text-center ${selected === 'employee'
                    && 'border-2 border-green-400 bg-green-50 dark:bg-green-950'
                    }`}
                    onClick={() => handleOnclick(true)}
                >
                    <Image
                        src="/assets/icons/employee.svg"
                        width={125}
                        height={115}
                        alt="Employee"
                    />
                    <span className="dark:text-dark-700 text-green-700 
                        font-medium mt-5 text-[14px] md:text-[15px]">
                        Employee
                    </span>
                </div>
            </section>
        </section>
    )
}

export default OnboardingChoice;