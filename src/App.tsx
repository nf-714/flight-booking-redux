import { Provider } from "react-redux";
import "./App.css";
import Form from "./components/form/form.component";
import Header from "./components/header/header.component";
import Preview from "./components/preview/preview.component";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <section>
        <Form />
        <Preview />
      </section>
    </Provider>
  );
}

export default App;
