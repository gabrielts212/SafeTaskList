import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import List from "../components/list/list";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const MyApp = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <Header/>
        <List />
        <Footer/>
      </Provider>
    </StrictMode>
  );
};

export default MyApp;
