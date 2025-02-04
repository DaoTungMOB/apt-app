import { TCrateAptForm } from "@/screens/admin/CreateApt";
import { AccountService } from "../AccountService";
import api, { baseURL } from "./api-config";
import {
  TAccount,
  TAccountResponse,
  TApt,
  TContactsResponse,
  TContract,
  TInvoice,
  TListAptResponse,
  TUtility,
} from "./type";
import { UploadResponse } from "../CloudinaryUploader";
import { TDataUpdateProfile } from "@/screens/UpdateProfile/items/UpdateProfileSubmit";
import axios from "axios";

export const FetchApi = {
  login: async (data: { email: string; password: string }) => {
    const response = await api.post<TAccountResponse>("/auth/login", data);
    await AccountService.set(response.data);
    return response.data;
  },
  register: async (data: any) => {
    const response = await api.post("/auth/register", data);
    return response.data;
  },
  changePassword: async ({
    newPassword,
    oldPassword,
  }: {
    newPassword: string;
    oldPassword: string;
  }) => {
    const response = await api.put("/users/change-password", {
      newPassword,
      oldPassword,
    });
    return response.data;
  },
  getContacts: async () => {
    const response = await api.get<TContactsResponse>("/admin/contacts");
    return response.data;
  },
  sendContact: async (data: any) => {
    const response = await api.post("/contacts", data);
    return response.data;
  },
  updateProfile: async (data: TDataUpdateProfile) => {
    const response = await api.put("/users/profile", data);
    return response.data;
  },
  getMyProfile: async () => {
    const response = await api.get<TAccount>("/users/profile");
    const account = await AccountService.get();
    await AccountService.set({ ...account, userProlile: response.data });
    return response.data;
  },
  getAvaiableApartment: async () => {
    const resposne = await api.get<TApt[]>("/apartments");
    return resposne.data;
  },
  getAvaiableApartmentDetail: async (apt_id: string) => {
    const resposne = await api.get<TApt>(`/apartments/${apt_id}`);
    return resposne.data;
  },
  getMyApt: async () => {
    const response = await api.get("/users/apartments");
    return response.data;
  },
  getListApt: async () => {
    const response = await api.get<TListAptResponse>("/admin/apartments");
    return response.data;
  },
  getAptDetail: async (apt_id: string) => {
    const response = await api.get<TApt>(`/admin/apartments/${apt_id}`);
    return response.data;
  },
  getListUser: async () => {
    const response = await api.get<Pick<TAccountResponse, "userProlile">[]>(
      "/admin/users"
    );
    return response.data;
  },
  addUserApt: async ({
    userId,
    aptId,
    status,
    endDate,
    startDate,
  }: {
    userId: string;
    status: "rented" | "sold";
    aptId: string;
    endDate: number;
    startDate: number;
  }) => {
    console.log(userId, status, aptId, endDate);
    const response = await api.post(`/admin/apartments/${aptId}/users`, {
      userId,
      endDate,
      status,
      startDate,
    });
    return response.data;
  },
  changeUserApt: async ({
    endDate,
    userId,
    aptId,
  }: {
    userId: string;
    endDate: string;
    aptId: string;
  }) => {
    console.log(userId, endDate, aptId);
    const response = await api.put(`/admin/apartments/${aptId}/users`, {
      userId,
      endDate,
    });
    return response.data;
  },
  createApt: async (data: {
    code: string;
    floorNumber: number;
    area: number;
    rentPrice: number;
    sellPrice: number;
    thumbnail: UploadResponse[];
    imageUrls: UploadResponse[];
  }) => {
    const {
      area,
      code,
      floorNumber,
      rentPrice,
      sellPrice,
      imageUrls,
      thumbnail,
    } = data;
    const response = await api.post("/admin/apartments", {
      code,
      floorNumber: Number(floorNumber),
      area: Number(area),
      rentPrice: Number(rentPrice),
      sellPrice: Number(sellPrice),
      imageUrls: imageUrls.map((item) => item.secure_url),
      thumbnail: thumbnail[0]?.secure_url,
    });
    return response.data;
  },
  editApt: async (data: {
    code: string;
    floorNumber: number;
    area: number;
    rentPrice: number;
    sellPrice: number;
    thumbnail?: UploadResponse[];
    imageUrls?: UploadResponse[];
    apt_id: string;
  }) => {
    const {
      area,
      code,
      floorNumber,
      rentPrice,
      sellPrice,
      imageUrls,
      thumbnail,
    } = data;
    const dataSubmit: {
      code: string;
      floorNumber: number;
      area: number;
      rentPrice: number;
      sellPrice: number;
      imageUrls?: string[];
      thumbnail?: string;
    } = {
      code,
      floorNumber: Number(floorNumber),
      area: Number(area),
      rentPrice: Number(rentPrice),
      sellPrice: Number(sellPrice),
    };
    if (imageUrls)
      dataSubmit["imageUrls"] = imageUrls.map((item) => item.secure_url);
    if (thumbnail) dataSubmit["thumbnail"] = thumbnail[0]?.secure_url;
    const response = await api.put(
      `/admin/apartments/${data.apt_id}`,
      dataSubmit
    );
    return response.data;
  },
  deleteUserApt: async (apt_id: string) => {
    console.log(apt_id);
    const response = await api.delete(`/admin/apartments/${apt_id}/users`);
    return response.data;
  },
  createUtility: async (data: {
    apt_id: string;
    title: string;
    description: string;
    price: string;
  }) => {
    console.log(data);
    const { apt_id, description, price, title } = data;
    const response = await api.post(`/admin/apartments/${apt_id}/utilities`, {
      title,
      description,
      price: Number(price),
      unit: "Tháng",
    });
    return response.data;
  },
  getContractApt: async (apt_id: string) => {
    const response = await api.get<TContract[]>(
      `/admin/apartments/${apt_id}/contracts`
    );
    return response.data;
  },
  getAllUtilityApt: async (apt_id: string) => {
    const response = await api.get<TUtility[]>(
      `/admin/apartments/${apt_id}/utilities`
    );
    return response.data;
  },
  addInvoice: async (data: {
    title: string;
    quantity: string;
    month: string;
    year: string;
    utility_id: string;
  }) => {
    const { utility_id, month, quantity, title, year } = data;
    const respone = await api.post(`/admin/utilities/${utility_id}/invoices`, {
      title,
      month: Number(month),
      quantity: Number(quantity),
      year: Number(year),
    });
    return respone.data;
  },
  getUtility: async (utility_id: string) => {
    const response = await api.get<TUtility>(`/admin/utilities/${utility_id}`);
    return response.data;
  },
  getInvoiceUtility: async (utility_id: string) => {
    const respone = await api.get<TInvoice[]>(
      `/admin/utilities/${utility_id}/invoices`
    );
    return respone.data;
  },
  getMyAptDetail: async (apt_id: string) => {
    const respone = await api.get<TApt>(`/apartments/${apt_id}`);
    return respone.data;
  },
  getMyAptUtility: async (apt_id: string) => {
    const respone = await api.get<TUtility[]>(
      `/apartments/${apt_id}/utilities`
    );
    console.log('hdsgvhsdjvgsjvhj ~ ', respone.data)
    return respone.data;
  },
  getMyUtility: async (utility_id: string) => {
    const response = await api.get<TUtility>(`/utilities/${utility_id}`);
    return response.data;
  },
  getMyutilityInvoice: async (utility_id: string) => {
    const resposne = await api.get<TInvoice[]>(
      `/utilities/${utility_id}/invoices`
    );
    return resposne.data;
  },
  payInvoice: async (id: string) => {
    const response = await api.put(`/invoices/${id}/pay`);
    return response.data;
  },
  forgotPassword: async (email: string) => {
    const response = await api.post<{ message: string }>(
      "/auth/forgot-password",
      { email }
    );
    return response.data;
  },
  verifyForgotPassword: async (data: { email: string; otp: string }) => {
    const response = await api.post<{
      message: string;
      canResetPassword: boolean;
      token?: null | string;
    }>("/auth/verify-forgot-password", data);
    return response.data;
  },
  resetPassword: async ({
    newPassword,
    token,
  }: {
    newPassword: string;
    token: string;
  }) => {
    const response = await axios.post(
      `${baseURL}/auth/reset-password`,
      { newPassword },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
  deleteUtility: async (id: string) => {
    const response = await api.delete(`/admin/utilities/${id}`);
    return response.data;
  },
  restoreUtility: async (id: string) => {
    const response = await api.put(`/admin/utilities/${id}/restore`);
    return response.data;
  },
  updateUtility: async (data: {
    id: string;
    title: string;
    price: string;
    description: string;
  }) => {
    const { id, ...rest } = data;
    const response = await api.put(`/admin/utilities/${id}`, { ...rest });
    return response.data;
  },
  getMonthlySignedStatistics: async () => {
    const response = await api.get<unknown[]>(
      `/admin/statistics/monthly-signed-statistics`
    );
    return response.data;
  },
  getMonthlyPaidInvoices: async () => {
    const response = await api.get<TInvoice[]>(
      "/admin/statistics/monthly-paid-invoices"
    );
    return response.data;
  },
};
