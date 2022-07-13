import { configureStore } from "@reduxjs/toolkit";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { server } from "../../mocks/server";
import rootReducer from "../../redux/reducers";
import ActivitiesList from "./ActivitiesList";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given an ActivitiesList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show types of the activities", async () => {
      const store = configureStore({
        reducer: rootReducer,
      });

      render(
        <Provider store={store}>
          <ActivitiesList />
        </Provider>
      );
      const type = await screen.findByText("Activities");

      await waitFor(() => {
        expect(type).toBeInTheDocument();
      });
    });
  });
});
