import { authKey } from "@/constant/constant";
import { useGetUserQuery } from "@/redux/api/authApi";
import { decodedToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/localStorage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role.toLowerCase(),
    };
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};

export const removeUser = () => {
  return removeFromLocalStorage(authKey);
};

export const getUserDetails = async () => {
  const { email } = getUserInfo();
  const res = await fetch(`http://localhost:5000/api/v1/users/${email}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const userDetails = await res.json();

  return userDetails;
};
