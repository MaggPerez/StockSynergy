import InventorySidebar from "../components/InventorySidebar"
import PageHeader from "../components/PageHeader";
import { setDocumentTitle } from "../script";

function Suppliers() {
    setDocumentTitle("Suppliers")
  return (
    <main className="bg-gray-50 dark:bg-common-black text-black dark:text-white min-h-screen lg:pl-56 lg:duration-300">
        <InventorySidebar />
        <PageHeader title="Suppliers - Coming Soon" />
    </main>
  )
}

export default Suppliers