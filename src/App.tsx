import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarsTable } from "./components/CarsTable";
import { useState } from "react";
import { Car } from "./types/Car";

function App() {
  const [selectedItem, setSelectedItem] = useState<Car | null>(null);
  return (
    <div style={{ width: "50%", margin: "10px" }}>
      <CarsTable selectedCar={selectedItem} onCarSelected={setSelectedItem} />
    </div>
  );
}

export default App;
