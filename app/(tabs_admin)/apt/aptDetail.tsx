import { AptDetail } from "@/screens/admin/AptDetail";
import { FileEdit } from "@tamagui/lucide-icons";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";

export default function ApartmantDetail() {
  const { apt_id } = useLocalSearchParams();
  const router = useRouter();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/(tabs_admin)/apt/editApt",
              params: { apt_id },
            })
          }
        >
          <FileEdit color={"$background"} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return <AptDetail />;
}
