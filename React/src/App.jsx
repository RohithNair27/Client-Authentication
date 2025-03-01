import Router from "./routes/Router";
import AppContext from "./context/AppContext";

function App() {
  return (
    <AppContext>
      <Router />
    </AppContext>
  );
}

export default App;
