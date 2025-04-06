"use client";

import { createContext, useContext, useState } from "react";

const intialState = {
    name: 'Sumaiya Ahmed',
    email: 'ahmedahona@gmail.com',
    phoneNumber: '+8801920190520',
    onboarded: true,
    role: 2,
    isActive: false
}

const UserContext = createContext();

const UserProvider = ({ children, initialData }) => {
    const data = initialData || intialState;
    const [user, setUser] = useState(data);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined)
        throw new Error("Context was used outside provider");
    return context;
}

export { UserProvider, useUser }