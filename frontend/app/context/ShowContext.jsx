"use client"

import { createContext, useState, useContext, useEffect } from 'react';

const ShowContext = createContext();

export const ShowProvider = ({ children }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <ShowContext.Provider value={{ show, setShow }}>
            {children}
        </ShowContext.Provider>
    );
};

export const useShow = () => {
    const context = useContext(ShowContext);
    if (!context) throw new Error("useShow must be used within a ShowProvider");
    return context;
};
