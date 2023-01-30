import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarsTable } from "./components/CarsTable";

function App() {
  return (
    <div style={{ width: "50%", margin: "10px" }}>
      <CarsTable />
    </div>
  );
}

export default App;
