import Products from '../components/Products'
import InventorySidebar from '../components/InventorySidebar'
import PageHeader from '../components/PageHeader'
import { setDocumentTitle } from '../script'
import { SelectedItemsProvider } from '../components/SelectedItems'

function Restock() {
  setDocumentTitle("Restock")
  return (
    <SelectedItemsProvider>
    <main className="bg-gray-50 dark:bg-common-black text-black dark:text-white lg:pl-56 lg:duration-300 h-[130vh]">
      <InventorySidebar />
      <div className="flex justify-between">
        <PageHeader title="Restock" pathTo="/stockroom" />
      </div>
      <Products />
    </main>
    </SelectedItemsProvider>
  )
}

export default Restock