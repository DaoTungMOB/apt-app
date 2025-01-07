import * as ImagePicker from 'expo-image-picker';

export type MediaType = 'photo' | 'video';

export interface PickedImage {
  uri: string;
  width: number;
  height: number;
  type?: string;
}

/**
 * Request permission and open the image picker to select one or multiple images/videos.
 * @param mediaType - 'photo' or 'video' to specify the type of media.
 * @param allowMultiple - true to allow multiple selection, false for single.
 * @returns A promise that resolves with an array of selected images or an empty array if canceled.
 */
export const pickImage = async (
  mediaType: MediaType = 'photo',
  allowMultiple: boolean = false
): Promise<PickedImage[]> => {
  try {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access media library is required.');
      return [];
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: mediaType === 'video' 
        ? ImagePicker.MediaTypeOptions.Videos 
        : ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: allowMultiple,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      return result.assets.map(asset => ({
        uri: asset.uri,
        width: asset.width,
        height: asset.height,
        type: asset.type,
      }));
    }
    return [];
  } catch (error) {
    console.error('Error picking image:', error);
    return [];
  }
};

/**
 * Request permission and open the camera to capture an image.
 * @returns A promise that resolves with the captured image or null if canceled.
 */
export const takePhoto = async (): Promise<PickedImage | null> => {
  try {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access camera is required.');
      return null;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const asset = result.assets[0];
      return {
        uri: asset.uri,
        width: asset.width,
        height: asset.height,
        type: asset.type,
      };
    }
    return null;
  } catch (error) {
    console.error('Error capturing photo:', error);
    return null;
  }
};
