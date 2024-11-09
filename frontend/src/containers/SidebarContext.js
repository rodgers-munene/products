import React,  { createContext, useState } from "react";

// creating the context
export const SidebarContext = createContext()


// create the provider

export const SidebarProvider = ({ children }) => {
        const[isSidebarOpen, setSidebarOpen] = useState(false)

        const toggleSidebar = () =>{
            setSidebarOpen((prev) => !prev)
        }

        return(
            <SidebarContext.Provider value={{isSidebarOpen, toggleSidebar}}>
                {children}
            </SidebarContext.Provider>
        )
}