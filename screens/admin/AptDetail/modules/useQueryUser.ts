import { FetchApi, QUERY_KEY } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export function useQueryUser() {
  const result = useQuery({
    queryKey: [QUERY_KEY.ADMIN, QUERY_KEY.APP, QUERY_KEY.ACCOUNT],
    queryFn: FetchApi.getListUser,
  });
  return result;
}
