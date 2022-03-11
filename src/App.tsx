import { Provider } from "react-redux";
import "./App.css";
import MainRoutes from "./config/routers";
import generateStore from "./config/store/store";

function App() {
  const store = generateStore();
  return (
    <>
      <Provider store={store}>
        <MainRoutes />
      </Provider>
    </>
  );
}

export default App;
