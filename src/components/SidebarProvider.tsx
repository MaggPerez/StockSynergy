import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
interface SidebarContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  openSidebar: () => void;
}

// Create the context with default values
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Custom hook to use the sidebar context
export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

// Provider component
interface SidebarProviderProps {
  children: ReactNode;
}

// LEFT OFF HERE -- set the boolean to false so that the sidebar remains closed. See if you like this option or not
//The issue is that on mobile, the sidebar is still opened
export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const value: SidebarContextType = {
    isSidebarOpen,
    toggleSidebar,
    closeSidebar,
    openSidebar
  };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};