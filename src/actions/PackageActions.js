import { notification } from "antd";
import * as packageAPI from "../apis/Packages";

export const getPackages = async () => {
  try {
    const { data } = await packageAPI.getAllPackages();
    if (data.success) {
      return data.packages;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error?.response?.data);
    notification.error({
      message: error?.response?.data?.message,
      description: error?.response?.data?.error,
    });
  }
};

export const getActivatedPackages = async () => {
  try {
    const packageId = JSON.parse(sessionStorage.getItem("user")).package;
    if (packageId) {
      const { data } = await packageAPI.getPackageById(packageId);
      return data.package;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error?.response?.data);
  }
};

export const selectPackage = async (packageId, navigateToHome) => {
  try {
    const userId = JSON.parse(sessionStorage.getItem("user"))._id;
    const { data } = await packageAPI.selectPackage({
      userId: userId,
      packageId: packageId,
    });
    if (data.success) {
      notification.success({
        message: "Success",
        description: data?.message,
      });
      navigateToHome();
    } 
  } catch (error) {
    console.log(error?.response?.data);
    notification.error({
        message: error?.response?.data?.message,
        description: error?.response?.data?.error,
      });
  }
};
