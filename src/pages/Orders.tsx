import PageHeader from "../components/PageHeader";
import { setDocumentTitle } from "../script";
import { SidebarLayout } from "../components/SidebarLayout";

function Orders() {
  setDocumentTitle("Orders")
  return (
    <SidebarLayout>
      <main>
        <PageHeader title="Orders - Coming Soon" pathTo="/home" chevronName="Home" />
      </main>
    </SidebarLayout>
  )
}

export default Orders