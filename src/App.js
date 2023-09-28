import { createContext } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AppRouter } from "./Components/Common/AppRouter";
export const AppContext = createContext();
function App() {
  return (
    <div className="App">
        <AppRouter/>
        <ToastContainer />
    </div>
  );
}

export default App;
