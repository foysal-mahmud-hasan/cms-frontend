import "./App.css";
import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import AppRoute from "./AppRoute";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/store";

function App() {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
    <MantineProvider withNormalizeCss withGlobalStyles>
      <ModalsProvider>
        <AppRoute />
      </ModalsProvider>
    </MantineProvider>
       </PersistGate>
     </Provider>
  );
}

export default App;
