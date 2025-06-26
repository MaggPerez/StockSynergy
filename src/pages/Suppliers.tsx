import { SidebarLayout } from "../components/SidebarLayout";
import PageHeader from "../components/PageHeader";
import { setDocumentTitle } from "../script";

function Suppliers() {
  setDocumentTitle("Suppliers")
  return (
    <SidebarLayout>
      <main className="bg-gray-50 dark:bg-common-black text-black dark:text-white min-h-screen lg:pl-56 lg:duration-300">
        <PageHeader title="Suppliers - Coming Soon" pathTo="/home" chevronName="Home" />
      </main>
    </SidebarLayout>
  )
}

export default Suppliers