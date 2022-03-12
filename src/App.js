import { useState } from 'react';
import { SideBar, InvoiceFormPanel } from './containers';

const App = () => {
  const [invoicePanelState, setInvoicePanelState] = useState(false);
  const toggleFormPanel = () => {
    setInvoicePanelState(!invoicePanelState);
  };
  return (
    <>
      <SideBar openForm={toggleFormPanel} />
      <main className="container">
        <h1>DashBoard</h1>
      </main>
      <InvoiceFormPanel
        toggle={invoicePanelState}
        closeForm={toggleFormPanel}
      />
    </>
  );
};
export default App;
