import { TCartItem } from "./cart.types";
import { TAddress } from "./user.type";

type TOrderInfo = {
  orderItems: TCartItem[];
  count: number;
};

export type TOrder = {
  _id: string;
  orderedBy: string;
  orderInfo: TOrderInfo;
  payableAmount: number;
  paymentMethod: string;
  address: TAddress;
  status: "Pending" | "Delivered";
};
