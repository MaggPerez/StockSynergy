import React from 'react'
import { SidebarLayout } from "../components/SidebarLayout";
import { setDocumentTitle } from '../script'
import PageHeader from '../components/PageHeader'

function Settings() {
  setDocumentTitle("Settings")
  return (
    <SidebarLayout>
      <main>
        <PageHeader title="Settings - Coming Soon" pathTo='/home' chevronName='Home' />
      </main>
    </SidebarLayout>
  )
}

export default Settings