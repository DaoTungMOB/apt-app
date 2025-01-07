import { TCrateAptForm } from "@/screens/admin/CreateApt";
import { AccountService } from "../AccountService";
import api from "./api-config";
import { TAccountResponse, TApt, TListAptResponse } from "./type";
import { UploadResponse } from "../CloudinaryUploader";

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
  changeUserApt: async ({
    data,
    aptId,
  }: {
    data: { userId: string; status: string };
    aptId: string;
  }) => {
    console.log("data abc ~ ", data);
    const response = await api.post(`/admin/apartments/${aptId}/users`, data);
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
};
