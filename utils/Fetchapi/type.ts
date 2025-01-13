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

export type TAccount = {
  _id?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  cccd?: string;
  phone?: string;
  birthDay?: string;
  role?: "admin";
  avatar?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
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
  userProfile?: TAccount;
  thumbnail?: string;
  imageUrls?: string[];
};

export type TListAptResponse = TApt[];

//contact
export type TContact = {
  _id?: string;
  content?: string;
  createdAt?: number | null;
  deletedAt?: number | null;
  email?: string;
  phone?: string;
  updatedAt?: number | null;
  userId?: string;
};

export type TContactsResponse = TContact[];

//contract

export type TContract = {
  _id?: string;
  userId?: string;
  apartmentId?: string;
  status?: "effective" | "ended";
  startDate?: number | null;
  type?: "sold" | "rented";
  createdAt?: number | null;
  updatedAt?: number | null;
  deletedAt?: number | null;
  userProfile?: TAccount;
};

//utility
export type TUtility = {
  _id?: string;
  title?: string;
  description?: string;
  price?: number;
  unit?: string;
  apartmentId?: string;
  createdAt?: number | null;
  updatedAt?: number | null;
  deletedAt?: number | null;
  lastestInvoice?: {
    _id?: string;
    title?: string;
    quantity?: number;
    month?: number;
    year?: number;
    userId?: string;
    unitPrice?: number;
    totalPrice?: number;
    utilityId?: string;
    activatedAt?: number | null;
    status?: boolean;
    createdAt?: number | null;
    updatedAt?: number | null;
    deletedAt?: number | null;
  };
  paid?: boolean;
};

//invoice
export type TInvoice = {
  _id?: string;
  activatedAt?: number | null;
  createdAt?: number | null;
  deletedAt?: number | null;
  month?: number;
  quantity?: number;
  status?: boolean;
  title?: string;
  totalPrice?: number;
  unitPrice?: number;
  updatedAt?: number | null;
  userId?: string;
  utilityId?: string;
  year?: number;
};
