'use client';

import { useState } from 'react';
import { Step } from './Step';
import { cn } from '@/lib/utils';
import OnboardingProceed from './OnboardingProceed';
import OnboardingChoice from './OnboardingChoice';
import { useStepper } from '@/app/context/StepperContext';
import SubmitButton from '../common/SubmitButton';

const steps = ['Onboarding', 'Setup'];

export function Stepper() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isEmployee, setIsEmployee] = useState(false);
    const [isOnboardingDicisionClick, setIsOnboardingDicisionClick] = useState(false);
    const { submitForm, isLoading, isFullyComplete } = useStepper();

    const goNext = () => {
        if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
    };

    const goBack = () => {
        setIsOnboardingDicisionClick(false);
        if (currentStep > 0) setCurrentStep((prev) => prev - 1);
    };

    const proceedForm = async () => {
        if (submitForm) await submitForm();
    };


    return (
        <div className="w-full max-w-xl mx-auto space-y-7 mt-10 md:mt-0">
            <div className="relative flex items-center justify-between px-2">
                {steps.map((label, index) => (
                    <Step
                        key={index}
                        label={label}
                        step={index + 1}
                        isActive={index === currentStep}
                        isCompleted={(index < currentStep) || isFullyComplete}
                    />
                ))}

                {/* Connecting Line Behind Steps */}
                <div className="absolute top-5 left-5 right-5 h-[2px] bg-green-100 z-0">
                    <div
                        className={cn(
                            "h-full bg-green-400 transition-all duration-500 ease-in-out",
                            currentStep === 0 && "w-0",
                            (currentStep === 1 && !isFullyComplete) && "w-1/2",
                        )}
                    />
                </div>
            </div>

            {/* Step Content */}
            <div className="rounded-sm border  p-6 transition-all duration-300 shadow-md">
                {currentStep === 0 && <OnboardingChoice
                    setIsOnboardingDicisionClick={setIsOnboardingDicisionClick}
                    setIsEmployee={setIsEmployee}
                    isEmployee={isEmployee}
                />}

                {currentStep === 1 && <OnboardingProceed isEmployee={isEmployee} />}

                {/* Navigation Buttons */}
                {isOnboardingDicisionClick && (
                    <div className={`flex mt-3 ${currentStep === 0 ? 'justify-end' : 'justify-between'}`}>
                        {currentStep > 0 &&
                            <SubmitButton onClick={goBack}
                                className="px-4 py-2 rounded-sm border border-green-400 
                               dark:text-green-400  text-green-800 
                                bg-transparent hover:bg-transparent
                                font-medium disabled:opacity-50 cursor-pointer"
                            >
                                <span className="font-medium text-green-800">
                                    Back
                                </span>

                            </SubmitButton>
                        }

                        {((currentStep === 0) || (currentStep === 1 && !isEmployee)) &&
                            <div>
                                <SubmitButton onClick={currentStep === 0 ? goNext : proceedForm}
                                    isLoading={isLoading}
                                    loadingMessage='Proceeding...'
                                    className="float-end bg-green-400 
                                    hover:bg-[#05f27c] cursor-pointer"
                                >
                                    <span className="font-semibold text-green-800">
                                        {currentStep === 0 ? 'Next' : 'Proceed'}
                                    </span>

                                </SubmitButton>
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>
    );
}
