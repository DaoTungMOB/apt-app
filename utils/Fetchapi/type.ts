export type TAccountResponse = {
  accessToken?: string;
  expiresIn?: number;
  refreshToken?: string;
  userProlile?: {
    _id?: string;
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    cccd?: string;
    phone?: string;
    birthDay?: string;
    role?: "admin";
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
  };
};

//apt
export type TAptStatus = "unavailable" | "available" | "rented" | "sold";

export type TApt = {
  _id?: string | null;
  code?: string | null;
  floorNumber?: number | null;
  area?: number | null;
  rentPrice?: number | null;
  sellPrice?: number | null;
  status?: TAptStatus | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
  userId?: Date | null;
  userProfile?: Pick<TAccountResponse, "userProlile">;
  thumbnail?: string;
  imageUrls?: string[];
};

export type TListAptResponse = TApt[];
