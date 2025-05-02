import React from 'react'
import InventorySidebar from '../components/InventorySidebar'
import { setDocumentTitle } from '../script'
import PageHeader from '../components/PageHeader'

function Settings() {
    setDocumentTitle("Settings")
    return (
      <main className="bg-gray-50 dark:bg-common-black text-black dark:text-white min-h-screen lg:pl-56 lg:duration-300">
          <InventorySidebar />
          <PageHeader title="Settings - Coming Soon" />
      </main>
    )
}

export default Settings