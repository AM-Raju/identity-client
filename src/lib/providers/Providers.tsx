"use client";

import { getTotals } from "@/redux/slices/cartSlice";
import { persistor, store } from "@/redux/store";
import { ReactNode, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const Providers = ({ children }: { children: ReactNode }) => {
  useState(() => {
    store.dispatch(getTotals());
  });

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </>
  );
};

export default Providers;
