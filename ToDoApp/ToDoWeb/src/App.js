import "./css/main.css";
import {Tasks} from "./tasks/tasks";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5097';

function App() {
  return (
    <div className="App p-3">
      <Tasks />
    </div>
  );
}

export default App;
