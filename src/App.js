import { createContext } from "react";
import { AppRouter } from "./Components/Common/AppRouter";
export const AppContext = createContext();
function App() {
  return (
    <div className="App">
        <AppRouter/>
    </div>
  );
}

export default App;
