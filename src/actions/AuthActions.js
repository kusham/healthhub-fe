import { notification } from "antd";
import * as authAPI from "../apis/Auth";

export const signUp = async (userData, navigateToLoginPage) => {
  try {
    console.log(userData);
    const { data } = await authAPI.signUp(userData);
    if (data.success) {
      notification.success({
        message: "Success",
        description: data?.message,
      });
      navigateToLoginPage();
    }
  } catch (error) {
    console.log(error.response.data);
    notification.error({
      message: error?.response?.data?.message,
      description: error?.response?.data?.error,
    });
  }
};

export const login = async (credentials, navigateToApp) => {
  try {
    const { data } = await authAPI.logIn(credentials);
    if (data.success) {
      sessionStorage.setItem("user", JSON.stringify(data?.user));
      notification.success({
        message: "Success",
        description: data?.message,
      });
      navigateToApp(data?.user?.package ? true: false);
    }
  } catch (error) {
    console.log(error);
    notification.error({
      message: error?.response?.data?.message,
      description: error?.response?.data?.error,
    });
  }
};


export const getHealthData = async () => {
    try {
      const userId = JSON.parse(sessionStorage.getItem("user"))._id;
        const { data } = await authAPI.getHealthData(userId);
        console.log(data);
        return data?.healthData;
    } catch (error) {
      console.log(error?.response?.data);
    }
  };