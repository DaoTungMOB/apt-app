import { Colors } from "@/constants";
import { CirclePlus } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export function HeaderRightApt() {
  const router = useRouter()
  return (
    <TouchableOpacity hitSlop={20} onPress={() => router.push('/(tabs_admin)/apt/addApt')} >
      <CirclePlus color={Colors.light.background}/>
    </TouchableOpacity>
  );
}
