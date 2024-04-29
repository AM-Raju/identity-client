export type TAddress = {
  firstName: string;
  lastName: string;
  street: string;
  contact: string;
  apartmentNumber: string;
  state: string;
  zip: string;
};

export type TUser = {
  _id: string;
  username: string;
  image?: string;
  email: string;
  password: string;
  role: string;
  address?: TAddress;
};
