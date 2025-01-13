import { FetchApi, QUERY_KEY } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export function useQueryMyProfile() {
  const result = useQuery({
    queryKey: [QUERY_KEY.APP, QUERY_KEY.ACCOUNT, QUERY_KEY.MY_PROFILE],
    queryFn: FetchApi.getMyProfile,
  });
  return result;
}
