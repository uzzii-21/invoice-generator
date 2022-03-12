import { SideBar, InvoiceFormPanel } from './containers';
import FormPanelContext from './context/InvoiceFormPanelContext';

const App = () => (
  <>
    <main className="container">
      <h1>DashBoard</h1>
    </main>
    <FormPanelContext>
      <SideBar />
      <InvoiceFormPanel />
    </FormPanelContext>
  </>
);
export default App;
