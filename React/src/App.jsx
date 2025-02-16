import Router from "./routes/Router";
import { AppStateContextProvider } from "./context/AppStateContext/AppStateContextProvider";
function App() {
  return (
    <AppStateContextProvider>
      <Router />
    </AppStateContextProvider>
  );
}

export default App;
