import React, { ReactNode } from 'react';
import { useSidebar } from './SidebarProvider';
import InventorySidebar from './InventorySidebar'; // Your existing sidebar component

interface SidebarLayoutProps {
    children: ReactNode;
    className?: string;
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children, className = '' }) => {
    const { isCollapsed } = useSidebar();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-common-black">
            {/* Sidebar */}
            <InventorySidebar />

            {/* Main Content */}
            <main className={`
            flex-1 
            text-black 
            dark:text-white 
            transition-all 
            duration-300 
          ${isCollapsed ? 'lg:ml-0' : 'lg:ml-56'} 
          ${className}
        `}
            >
                {children}
            </main>
        </div>
    );
};
