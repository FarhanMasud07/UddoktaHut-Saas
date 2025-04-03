"use client"

import { createContext, useContext, useState } from "react";

const StepperContext = createContext();

export const StepperProvider = ({ children }) => {
    const [submitForm, setSubmitForm] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isFullyComplete, setIsFullyComplete] = useState(false);

    return (
        <StepperContext.Provider value={{
            submitForm, setSubmitForm, isLoading, setIsLoading,
            isFullyComplete, setIsFullyComplete
        }}>
            {children}
        </StepperContext.Provider>
    );
};

export const useStepper = () => {
    const context = useContext(StepperContext);
    if (!context) throw new Error("useStepper must be used within a StepperProvider");
    return context;
};
