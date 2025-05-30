import React, { ReactNode } from 'react';
import InventorySidebar from './InventorySidebar';
import { useSidebar } from './SidebarProvider';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const SidebarLayout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  const { isSidebarOpen } = useSidebar();

  return (
    <>
      <main className={`bg-gray-50 dark:bg-common-black text-black dark:text-white min-h-screen ${
        isSidebarOpen ? 'lg:pl-56' : 'pl-0'
      } duration-300 transition-all ${className}`}>
        <InventorySidebar />
        {children}
      </main>
    </>
  );
};

export default SidebarLayout;