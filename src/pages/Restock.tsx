import Products from '../components/Products'
import { SidebarLayout } from "../components/SidebarLayout";
import PageHeader from '../components/PageHeader'
import { setDocumentTitle } from '../script'

function Restock() {
  setDocumentTitle("Restock")
  return (
    <SidebarLayout>
      <main className=" h-[130vh]">

        <div className="flex justify-between">
          <PageHeader title="Restock" pathTo="/stockroom" chevronName='Stockroom' />
        </div>

        {/* Displays all categories (ex: M_Tees, M_Jackets) and their information */}
        <Products />
      </main>
    </SidebarLayout>
  )
}

export default Restock