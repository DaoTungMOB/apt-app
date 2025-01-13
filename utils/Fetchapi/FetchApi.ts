import { TCrateAptForm } from "@/screens/admin/CreateApt";
import { AccountService } from "../AccountService";
import api from "./api-config";
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
    return response.data;
  },
  getAvaiableApartment: async () => {
    const resposne = await api.get<TApt[]>("/apartments");
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
};
