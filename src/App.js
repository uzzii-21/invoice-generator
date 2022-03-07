import { useState } from 'react'
import { SideBar, InvoiceFormPanel } from './containers'

const App = () => {
  const [invoicePanelState, setInvoicePanelState] = useState(false)
  const toggleFormPanel = () => {
    setInvoicePanelState(!invoicePanelState)
  }
  return (
    <main className="container">
      <SideBar openForm={toggleFormPanel} />
      <InvoiceFormPanel
        toggle={invoicePanelState}
        closeForm={toggleFormPanel}
      />
    </main>
  )
}
export default App
