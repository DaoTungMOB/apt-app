import axios from "axios";
import { PickedImage } from "../ImagePicker";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/ds32vmzcc/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "my_uploads";

//apt app

export interface UploadResponse {
  secure_url: string;
  public_id: string;
}

/**
 * Hàm để lấy tên file từ URI.
 * @param uri - Đường dẫn file (file://)
 * @returns Tên file.
 */
const extractFileName = (uri: string): string => {
  // Loại bỏ phần 'file://' khỏi URI, nếu có
  const cleanUri = uri.replace("file://", "");

  // Chia URI thành mảng bằng dấu '/' và lấy phần tử cuối cùng, chính là tên file
  const parts = cleanUri.split("/");
  const fileName = parts[parts.length - 1];

  return fileName;
};

/**
 * Upload image to Cloudinary.
 * @param uri - The local URI of the image to upload.
 * @returns A promise that resolves with the Cloudinary response.
 */
export const uploadToCloudinary = async (
  file: PickedImage
): Promise<UploadResponse | null> => {
  try {
    const type = `${file.type}/${file.uri.split(".").reverse()[0]}`;
    const formData = new FormData();
    formData.append("file", {
      uri: file.uri,
      type,
      name: extractFileName(file.uri),
    } as any);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    console.log("formData ~ ", formData);
    const response = await axios.post(CLOUDINARY_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.data) {
      return {
        secure_url: response.data.secure_url,
        public_id: response.data.public_id,
      };
    }
    return null;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    return null;
  }
};

/**
 * Upload multiple images to Cloudinary.
 * @param uris - An array of image URIs to upload.
 * @returns A promise that resolves with an array of Cloudinary responses.
 */
export const uploadMultipleToCloudinary = async (
  files: PickedImage[]
): Promise<UploadResponse[]> => {
  console.log("files ~ ", files);
  const uploadPromises = files.map((file) => uploadToCloudinary(file));
  const results = await Promise.all(uploadPromises);
  return results.filter((result): result is UploadResponse => result !== null);
};
