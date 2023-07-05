import Navigates from "./Navigate.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
   return (
      <div className="App">
         <Navigates />
         <ToastContainer autoClose={3000} />
      </div>
   );
}

export default App;
