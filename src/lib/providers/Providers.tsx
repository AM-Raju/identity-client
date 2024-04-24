"use client";

import { getTotals } from "@/redux/slices/cartSlice";
import { store } from "@/redux/store";
import { ReactNode, useState } from "react";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: ReactNode }) => {
  useState(() => {
    store.dispatch(getTotals());
  });

  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default Providers;
