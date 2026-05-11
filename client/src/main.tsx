import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import PlayerContextProvider from "./context/PlayerContext.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </Provider>
  </BrowserRouter>,
);
