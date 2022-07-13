import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is called", () => {
    test("Then it should render a form", () => {
      const store = configureStore({
        reducer: rootReducer,
      });

      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const title = screen.getByText("Activities");

      expect(title).toBeInTheDocument();
    });
  });
});
