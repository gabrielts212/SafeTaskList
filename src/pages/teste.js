import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "../components/../redux/store";
import List from "../components/list/list";
// import "../styles/globals.css";
// import Footer from "@/components/footer/footer";
// import Header from "../components/header/Header";

const MyApp = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        {/* <Header/> */}
        <List />
        {/* <Footer/> */}
      </Provider>
    </StrictMode>
  );
};

export default MyApp;
