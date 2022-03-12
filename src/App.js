import { SideBar, InvoiceFormPanel } from './containers';
import FormPanelState from './context/FormStateContext';

const App = () => (
  <>
    <main className="container">
      <h1>DashBoard</h1>
    </main>
    <FormPanelState>
      <SideBar />
      <InvoiceFormPanel />
    </FormPanelState>
  </>
);
export default App;
