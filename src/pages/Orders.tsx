import InventorySidebar from "../components/InventorySidebar"
import PageHeader from "../components/PageHeader";
import { setDocumentTitle } from "../script";

function Orders() {
    setDocumentTitle("Orders")
  return (
    <main className="bg-gray-50 dark:bg-common-black text-black dark:text-white min-h-screen lg:pl-56 lg:duration-300">
        <InventorySidebar />
        <PageHeader title="Orders - Coming Soon" pathTo="/home" chevronName="Home" />
    </main>
  )
}

export default Orders