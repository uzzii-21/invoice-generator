import { useState } from 'react'
import { SideBar, InvoiceFormPanel } from './containers'

const App = () => {
  const [invoicePanelState, setInvoicePanelState] = useState(true)
  const setToggle = () => {
    setInvoicePanelState(!invoicePanelState)
  }
  return (
    <main className="container">
      <SideBar />
      <InvoiceFormPanel toggle={invoicePanelState} setToggle={setToggle} />
    </main>
  )
}
export default App
