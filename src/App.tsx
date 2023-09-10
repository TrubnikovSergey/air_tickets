import "./App.css";
import TicketsPage from "./components/ticketsPage/ticketsPage";
import { ticketsStore } from "./stores/ticketsStore";

function App() {
  ticketsStore.initStopsList();

  return (
    <div className="app">
      <TicketsPage />;
    </div>
  );
}

export default App;
