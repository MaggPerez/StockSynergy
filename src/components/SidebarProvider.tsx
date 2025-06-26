import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface SidebarContextType {
    isCollapsed: boolean;
    toggleSidebar: () => void;
    setSidebarCollapsed: (collapsed: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    //Initializing localStorage or default to false which means it's expanded from start
    const sidebar_collapsed: string = 'sidebar-collapsed';

    const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
        const saved = localStorage.getItem(sidebar_collapsed);
        return saved ? JSON.parse(saved) : false;
    });

    //Persisiting state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem(sidebar_collapsed, JSON.stringify(isCollapsed));
    }, [isCollapsed]);


    //Sidebar toggle
    const toggleSidebar = () => {
        setIsCollapsed(prev => !prev)
    }

    //Setting sidebar collapsed
    const setSidebarCollapsed = (collapsed: boolean) => {
        setIsCollapsed(collapsed)
    }

    return (
        <SidebarContext.Provider value={{ isCollapsed, toggleSidebar, setSidebarCollapsed }}>
            {children}
        </SidebarContext.Provider>
    );
};


export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if(context === undefined) {
        throw new Error('useSidebar must be used within a SidebarProvider')
    }

    return context;
}