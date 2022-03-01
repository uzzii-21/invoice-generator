import { useState } from 'react'
import Container from './components/Container/Container'
import InvoiceFormPanel from './components/InvoiceFormPanel/InvoiceFormPanel'
import SideBar from './components/SideBar/SideBar'

const App = () => {
  const [invoicePanelState, setInvoicePanelState] = useState(true)
  const setToggle = () => {
    setInvoicePanelState(!invoicePanelState)
  }
  return (
    <Container>
      <SideBar />
      <InvoiceFormPanel toggle={invoicePanelState} setToggle={setToggle} />
    </Container>
  )
}
export default App
